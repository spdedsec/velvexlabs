"use client";

import { useState, type FormEvent } from "react";

const PROJECT_TYPES = [
  "Branding",
  "Website design & development",
  "Custom web application",
  "E-commerce",
  "Something else",
];

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      company: formData.get("company"), // honeypot — should always be empty
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrorMessage(result.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-rule px-6 py-10">
        <p className="font-display text-xl text-ink">Thanks — got it.</p>
        <p className="mt-2 max-w-prose text-body text-ink/70">
          We reply to every inquiry within two business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Honeypot field: hidden from sighted and keyboard users, real bots often fill it in anyway. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div>
        <label htmlFor="name" className="font-mono text-caption uppercase tracking-wider text-ink-muted">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full border-b border-rule bg-transparent py-2 text-body text-ink outline-none transition-colors duration-200 focus:border-walnut"
        />
      </div>

      <div>
        <label htmlFor="email" className="font-mono text-caption uppercase tracking-wider text-ink-muted">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border-b border-rule bg-transparent py-2 text-body text-ink outline-none transition-colors duration-200 focus:border-walnut"
        />
      </div>

      <div>
        <label htmlFor="projectType" className="font-mono text-caption uppercase tracking-wider text-ink-muted">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          required
          defaultValue=""
          className="mt-2 w-full border-b border-rule bg-transparent py-2 text-body text-ink outline-none transition-colors duration-200 focus:border-walnut"
        >
          <option value="" disabled>
            Select one
          </option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="font-mono text-caption uppercase tracking-wider text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full resize-none border-b border-rule bg-transparent py-2 text-body text-ink outline-none transition-colors duration-200 focus:border-walnut"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-body text-walnut">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center border border-ink px-6 py-3 font-mono text-caption uppercase tracking-wider text-ink transition-colors duration-200 hover:bg-ink hover:text-paper disabled:cursor-not-allowed disabled:opacity-50"
      >
        {status === "submitting" ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
