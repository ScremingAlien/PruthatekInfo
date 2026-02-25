// app/contact/page.jsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState({ ok: false, msg: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: "" })); // clear field error on edit
  };

  // Phone validation: allow Indian 10-digit (with/without +91) or E.164 (7–15 digits)
  const isValidPhone = (v) => {
    if (!v || !v.trim()) return true; // optional field
    const raw = v.replace(/[\s()-]/g, "");
    const indian = /^(?:\+?91)?[6-9]\d{9}$/.test(raw);
    const e164 = /^\+?[1-9]\d{6,14}$/.test(raw); // international
    return indian || e164;
  };

  const validate = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    else if (form.message.trim().length < 10)
      e.message = "Message should be at least 10 characters.";
    if (!isValidPhone(form.phone))
      e.phone = "Enter a valid phone (10-digit India or international format).";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult({ ok: false, msg: "" });
    if (!validate()) return;

    setSubmitting(true);
    try {
      const payload = {
        firstName: form.firstName.trim(),
        lastName: form.lastName.trim() || undefined,
        email: form.email.trim(),
        phone: form.phone.trim() || undefined, // keep optional
        message: form.message.trim(),
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/v1/contact-form/submit`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to submit. Please try again.");
      }

      setResult({ ok: true, msg: "Thanks! We’ll get back to you shortly." });
      setTimeout(() => setResult({ ok: false, msg: "" }), 5000);
      setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch (err) {
      setResult({ ok: false, msg: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen font-inter bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40 blur-3xl">
          <div className="mx-auto h-64 w-[80%] -translate-y-8 rounded-full bg-gradient-to-r from-indigo-200 via-sky-200 to-emerald-200" />
        </div>
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Let’s build something useful together.
          </h1>
          <p className="mt-4 max-w-2xl text-slate-600">
            Fill out the form and we’ll respond within one business day. Prefer email?{" "}
            <a className="underline decoration-dotted underline-offset-2" href="mailto:info@pruthatek.com">
              info@pruthatek.com
            </a>
            .
          </p>
        </div>
      </section>

      {/* Card + Form */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <div className="rounded-3xl border bg-white/70 p-6 shadow-sm ring-1 ring-black/[0.03] backdrop-blur">
              <form noValidate onSubmit={onSubmit} className="space-y-5">
                {/* name row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatingInput
                    label="First name"
                    name="firstName"
                    value={form.firstName}
                    onChange={onChange}
                    required
                    aria-invalid={!!errors.firstName}
                    aria-describedby={errors.firstName ? "err-firstName" : undefined}
                  />
                  <FloatingInput
                    label="Last name"
                    name="lastName"
                    value={form.lastName}
                    onChange={onChange}
                  />
                </div>

                {/* email + phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <FloatingInput
                    type="email"
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                  />
                  <FloatingInput
                    type="tel"
                    label="Phone (optional)"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    inputMode="tel"
                    autoComplete="tel"
                    // HTML pattern (looser) complements JS validation above
                    pattern="^\+?[0-9\s()-]{7,15}$"
                    placeholder="+91 98xxxxxxx"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "err-phone" : undefined}
                  />
                </div>

                {/* message */}
                <FloatingTextarea
                  label="Message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={onChange}
                  required
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                />

                {/* inline error messages */}
                <FormErrors errors={errors} />

                {/* submit */}
                <div className="flex md:flex-row flex-col items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-white transition hover:bg-slate-800 disabled:opacity-60"
                  >
                    {submitting ? (
                      <span className="inline-flex items-center gap-2">
                        <Spinner /> Sending…
                      </span>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </div>

                {/* overall result message */}
                {result.msg && (
                  <p
                    className={`mt-3 text-sm ${result.ok ? "text-green-600" : "text-red-600"
                      }`}
                  >
                    {result.msg}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Contact details card */}
          <aside className="lg:col-span-2">
            <div className="rounded-3xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">Contact details</h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-slate-500">Email</dt>
                  <dd>
                    <a className="underline underline-offset-2 decoration-dotted" href="mailto:info@pruthatek.com">
                      info@pruthatek.com
                    </a>
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-slate-500">Phone</dt>
                  <dd>+91-9909918930</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-24 shrink-0 text-slate-500">Address</dt>
                  <dd>
                    G 10 Parasamani Flats
                    <br />
                    Nr. Karmachari Nagar, Opp Rannapark
                    <br />
                    Ghatlodia, Ahmedabad-380061
                    <br />
                    Gujarat, India
                  </dd>
                </div>
              </dl>

              <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-sm text-slate-600">
                <p className="font-medium text-slate-900">Support hours</p>
                <p>Mon–Fri, 10:00–18:00 IST</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <footer className="border-t bg-white/80">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-500">
          © {new Date().getFullYear()} [Pruthatek Legal Name]. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

/* ---------- Small helpers ---------- */

function FormErrors({ errors }) {
  const items = Object.entries(errors).filter(([, v]) => v);
  if (!items.length) return null;
  return (
    <div className="space-y-1">
      {items.map(([k, v]) => (
        <p key={k} id={`err-${k}`} className="text-sm text-rose-600">
          {v}
        </p>
      ))}
    </div>
  );
}

function FloatingInput({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
  pattern,
  inputMode,
  ...props
}) {
  const id = `fld-${name}`;
  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        pattern={pattern}
        inputMode={inputMode}
        placeholder={placeholder ?? " "}
        className="peer w-full rounded-xl border bg-white px-4 pb-2.5 pt-5 text-slate-900 shadow-sm outline-none ring-0 transition placeholder-transparent focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2.5 origin-[0] -translate-y-1 scale-90 transform text-slate-500 transition-all
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
        peer-focus:top-2.5 peer-focus:-translate-y-1 peer-focus:scale-90"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
    </div>
  );
}

function FloatingTextarea({
  label,
  name,
  rows = 4,
  required = false,
  placeholder,
  ...props
}) {
  const id = `fld-${name}`;
  return (
    <div className="relative">
      <textarea
        id={id}
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder ?? " "}
        className="peer w-full resize-y rounded-xl border bg-white px-4 pb-3 pt-5 text-slate-900 shadow-sm outline-none focus:border-slate-300 focus:ring-2 focus:ring-slate-200"
        {...props}
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2.5 origin-[0] -translate-y-1 scale-90 transform text-slate-500 transition-all
        peer-placeholder-shown:top-3.5 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
        peer-focus:top-2.5 peer-focus:-translate-y-1 peer-focus:scale-90"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
    </div>
  );
}

function Spinner() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}
