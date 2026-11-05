"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const fields = [
  { name: "firstName", label: "First name", type: "text", autoComplete: "given-name", required: true },
  { name: "lastName", label: "Last name", type: "text", autoComplete: "family-name", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "company", label: "Company or organisation", type: "text", autoComplete: "organization" },
  { name: "budget", label: "Budget range", type: "text", placeholder: "Include currency" },
];

const apiFieldNames: Record<string, string> = { firstName: "first_name", lastName: "last_name" };

export default function ContactForm({ initialService = "" }: { initialService?: string }) {
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});

  function fieldError(name: string) {
    return (fieldErrors[name] ?? fieldErrors[apiFieldNames[name]])?.[0];
  }

  function fieldProps(name: string) {
    const invalid = Boolean(fieldError(name));
    return {
      id: `enquiry-${name}`,
      name,
      "aria-invalid": invalid || undefined,
      "aria-describedby": invalid ? `enquiry-${name}-error` : undefined,
    };
  }

  function errorMessage(name: string) {
    const message = fieldError(name);
    return message && <p id={`enquiry-${name}-error`} className="form-error">{message}</p>;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;

    const body = Object.fromEntries(
      Array.from(new FormData(event.currentTarget).entries()).filter(([, value]) => value !== ""),
    );

    setSending(true);
    setError("");
    setFieldErrors({});

    try {
      const response = await fetch(`${site.portalApi}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(15000),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        if (response.status === 422) setFieldErrors(data.errors ?? {});
        setError(data.message || "Could not send your enquiry. Please try again.");
      }
    } catch {
      setError("Could not send your enquiry. Please try again or email us directly.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="form-card form-success" role="status">
        <CheckCircle2 size={34} aria-hidden="true" />
        <h2>Enquiry sent</h2>
        <p>Thanks for sharing your project. We’ll review the details and get back to you by email.</p>
        <button className="button button-outline" type="button" onClick={() => setSubmitted(false)}>Send another enquiry</button>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h2>Send a project enquiry</h2>
      <p>Fields marked with an asterisk are required.</p>
      {error && <p className="form-error form-banner" role="alert">{error}</p>}
      <form onSubmit={handleSubmit} className="form-grid" aria-busy={sending}>
        {fields.map(({ name, label, ...input }) => (
          <div className="form-field" key={name}>
            <label htmlFor={`enquiry-${name}`}>{label}{input.required && <span aria-hidden="true"> *</span>}</label>
            <input {...fieldProps(name)} {...input} />
            {errorMessage(name)}
          </div>
        ))}
        <div className="form-field form-full">
          <label htmlFor="enquiry-service">Service <span aria-hidden="true">*</span></label>
          <select {...fieldProps("service")} defaultValue={initialService} required>
            <option value="" disabled>Choose a service</option>
            {services.map(({ enquiry }) => <option key={enquiry}>{enquiry}</option>)}
            <option>Other / Not Sure Yet</option>
          </select>
          {errorMessage("service")}
        </div>
        <div className="form-field form-full">
          <label htmlFor="enquiry-message">Project details <span aria-hidden="true">*</span></label>
          <textarea {...fieldProps("message")} rows={5} required placeholder="What would you like to build or improve?" />
          {errorMessage("message")}
        </div>
        <div className="form-full">
          <button className="button button-primary" type="submit" disabled={sending}>
            {sending ? "Sending…" : "Send enquiry"} <ArrowUpRight size={16} aria-hidden="true" />
          </button>
        </div>
      </form>
    </div>
  );
}
