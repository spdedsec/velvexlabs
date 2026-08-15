import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_DESTINATION_EMAIL, CONTACT_EMAIL } from "@/lib/contact";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PROJECT_TYPES = new Set([
  "Branding",
  "Website design & development",
  "Custom web application",
  "E-commerce",
  "Something else",
]);

const MAX_LENGTHS = {
  name: 120,
  email: 254,
  projectType: 80,
  message: 5000,
};

export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  projectType?: unknown;
  message?: unknown;
  company?: unknown;
};

function readText(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  return text.length > 0 ? text : null;
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  // Honeypot field — bots that fill hidden fields receive a successful-looking
  // response so they do not retry or learn that they were filtered.
  if (typeof body.company === "string" && body.company.trim()) {
    return NextResponse.json({ success: true });
  }

  const name = readText(body.name);
  const email = readText(body.email);
  const projectType = readText(body.projectType);
  const message = readText(body.message);

  if (!name || !email || !projectType || !message) {
    return NextResponse.json(
      { success: false, error: "Please fill in every field." },
      { status: 400 },
    );
  }

  if (
    name.length > MAX_LENGTHS.name ||
    email.length > MAX_LENGTHS.email ||
    projectType.length > MAX_LENGTHS.projectType ||
    message.length > MAX_LENGTHS.message
  ) {
    return NextResponse.json(
      { success: false, error: "One or more fields are too long." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { success: false, error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  if (!PROJECT_TYPES.has(projectType)) {
    return NextResponse.json(
      { success: false, error: "Please select a valid project type." },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set — contact form cannot send email.");
    return NextResponse.json(
      { success: false, error: "Email isn't configured yet. Please email us directly." },
      { status: 500 },
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const fromAddress =
    process.env.RESEND_FROM_EMAIL || `Velvex Labs Website <${CONTACT_EMAIL}>`;
  const safeName = name.replace(/[\r\n]+/g, " ");

  try {
    const { error } = await resend.emails.send({
      from: fromAddress,
      to: CONTACT_DESTINATION_EMAIL,
      replyTo: email,
      subject: `New inquiry from ${safeName} — ${projectType}`,
      text: [
        "New inquiry from the Velvex Labs website",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Project type: ${projectType}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    });

    if (error) {
      console.error("Contact form email failed to send:", error);
      return NextResponse.json(
        {
          success: false,
          error: "Something went wrong sending your message. Please email us directly.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email failed to send:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong sending your message. Please email us directly.",
      },
      { status: 500 },
    );
  }
}
