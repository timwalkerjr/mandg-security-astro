import { useFormSubmit } from "@/hooks/useFormSubmit";
import { FORMSPREE } from "@/config/forms";

// Interactive island: contact form. Posts to Formspree via the verbatim
// useFormSubmit hook (honeypot + JSON response handling).
export default function ContactForm() {
  const { status, error, handleSubmit } = useFormSubmit(
    FORMSPREE.contact,
    "company_alt",
  );

  return (
    <form
      id="contact-form"
      data-readdy-form
      className="mt-6 space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">First Name</label>
          <input type="text" name="first_name" className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors" placeholder="John" />
        </div>
        <div>
          <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">Last Name</label>
          <input type="text" name="last_name" className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors" placeholder="Doe" />
        </div>
      </div>
      <div>
        <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">Email</label>
        <input type="email" name="email" required className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors" placeholder="john@example.com" />
      </div>
      <div>
        <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">Phone</label>
        <input type="tel" name="phone" className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors" placeholder="(484) 555-0123" />
      </div>
      <div>
        <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">Message</label>
        <textarea name="message" rows={4} maxLength={500} className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="Tell us about your security needs..." />
      </div>
      {/* Formspree email subject */}
      <input type="hidden" name="_subject" value="New M&G Security — Contact form submission" />
      {/* Honeypot */}
      <input type="text" name="company_alt" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3 bg-primary-500 text-foreground-950 font-label text-xs uppercase tracking-[0.1em] hover:bg-primary-600 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>
      {status === "success" && (
        <p className="text-sm text-primary-700 text-center">
          Thank you! Your message has been sent. We will get back to you within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">
          {error || "Something went wrong. Please try again."}
        </p>
      )}
    </form>
  );
}
