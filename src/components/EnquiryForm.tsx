import React, { useRef, useState, useEffect } from "react";
import ThankYou from "./ThankYou";
import ErrorNotice from "./ErrorNotice";

const ENQUIRY_DRAFT_KEY = "enquiryDraft";

const initialState = {
  name: "",
  phone: "",
  email: "",
  dates: "",
  message: "",
  "bot-field": ""
};

export default function EnquiryForm() {
  const [formState, setFormState] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Repopulate from localStorage on mount
  useEffect(() => {
    const cached = localStorage.getItem(ENQUIRY_DRAFT_KEY);
    if (cached) setFormState(JSON.parse(cached));
  }, []);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    // reCAPTCHA validation
    if (!(window as any).grecaptcha) {
      setError("reCAPTCHA not loaded");
      setStatus("error");
      return;
    }
    const recaptchaToken = await new Promise<string>((resolve) => {
      (window as any).grecaptcha.execute(import.meta.env.VITE_RECAPTCHA_SITE_KEY, { action: "submit" }).then(resolve);
    });
    // Prepare data
    const data = new FormData(form);
    data.append("g-recaptcha-response", recaptchaToken);
    const body = new URLSearchParams(data as any).toString();
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body
      });
      if (res.ok) {
        setStatus("success");
        localStorage.removeItem(ENQUIRY_DRAFT_KEY);
      } else {
        throw new Error("Network error");
      }
    } catch (err) {
      setStatus("error");
      setError("Submission failed. Please try again.");
      localStorage.setItem(ENQUIRY_DRAFT_KEY, JSON.stringify(formState));
    }
  };

  if (status === "success") return <ThankYou />;
  if (status === "error") return <ErrorNotice message={error} />;

  return (
    <form
      ref={formRef}
      name="enquiry"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      action="/thank-you"
      onSubmit={handleSubmit}
      autoComplete="on"
      className="space-y-6"
    >
      {/* Netlify hidden input */}
      <input type="hidden" name="form-name" value="enquiry" />
      {/* Honeypot */}
      <div style={{ position: "absolute", left: "-9999px", height: 0, overflow: "hidden" }}>
        <label>
          Don't fill this out: <input name="bot-field" value={formState["bot-field"]} onChange={handleChange} tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div>
        <label htmlFor="name">Full Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formState.name}
          onChange={handleChange}
          autoComplete="name"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          pattern="\\+?[0-9\\s\\-]{7,}"
          value={formState.phone}
          onChange={handleChange}
          autoComplete="tel"
        />
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formState.email}
          onChange={handleChange}
          autoComplete="email"
        />
      </div>
      <div>
        <label htmlFor="dates">Required from… *</label>
        <input
          id="dates"
          name="dates"
          type="text"
          required
          placeholder="Required from…"
          value={formState.dates}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={formState.message}
          onChange={handleChange}
        />
      </div>
      {/* reCAPTCHA widget */}
      <div className="g-recaptcha" data-sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}></div>
      <button type="submit">Send Enquiry</button>
    </form>
  );
} 