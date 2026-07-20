import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_DESTINATION_EMAIL } from "@/lib/contact";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: {
    name?: string;
    email?: string;
    projectType?: string;
    message?: string;
    company?: string;
  };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, email, projectType, message, company } = body;

  // Honeypot field — hidden from real visitors in the UI. Bots that fill
  // every field trip this; respond as if it succeeded so they don't retry.
  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!name || !email || !projectType || !message) {
    return NextResponse.json(
      { success: false, error: "Please fill in every field." },
      { status: 400 }
    );
  }

  if (typeof email !== "string" || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { success: false, error: "That email address doesn't look right." },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json(
      { success: false, error: "Email isn't configured yet. Please email us directly." },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      // Uses Resend's shared testing domain by default, which works
      // immediately with just an API key. Once velvexlabs.com is verified
      // in Resend, switch this to something like
      // "Velvex Labs <hello@velvexlabs.com>" for proper deliverability.
      from: "Velvex Labs Website <onboarding@resend.dev>",
      to: CONTACT_DESTINATION_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${name} — ${projectType}`,
      text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed to send:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong sending your message. Please email us directly.",
      },
      { status: 500 }
    );
  }
}
