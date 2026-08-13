import { useFormSubmit } from "@/hooks/useFormSubmit";
import { FORMSPREE } from "@/config/forms";

// Interactive island: employment application form. Posts to Formspree via the
// verbatim useFormSubmit hook (honeypot + JSON response handling).
export default function EmploymentForm() {
  const { status, error, handleSubmit } = useFormSubmit(
    FORMSPREE.employment,
    "website_alt",
  );

  return (
    <form
      id="employment-application-form"
      data-readdy-form
      className="space-y-4"
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">First Name *</label>
          <input type="text" name="first_name" required className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
        </div>
        <div>
          <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">Last Name *</label>
          <input type="text" name="last_name" required className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
        </div>
      </div>
      <div>
        <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">Email *</label>
        <input type="email" name="email" required className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
      </div>
      <div>
        <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">Phone *</label>
        <input type="tel" name="phone" required className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors" />
      </div>
      <div>
        <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">Law Enforcement Background</label>
        <select name="law_enforcement_background" className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors">
          <option value="">Select...</option>
          <option value="active">Active Law Enforcement</option>
          <option value="retired">Retired Law Enforcement</option>
          <option value="security">Security Experience</option>
          <option value="other">Other/Military</option>
        </select>
      </div>
      <div>
        <label className="block font-label text-xs uppercase tracking-[0.1em] text-foreground-700 mb-1.5">Message / Cover Letter</label>
        <textarea name="message" rows={4} maxLength={500} className="w-full px-4 py-2.5 border border-background-300 bg-background-50 text-foreground-950 text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="Tell us about your background and why you want to join M&G Security..." />
      </div>
      {/* Formspree email subject */}
      <input type="hidden" name="_subject" value="New M&G Security — Employment application" />
      {/* Honeypot */}
      <input type="text" name="website_alt" className="hp-field" tabIndex={-1} autoComplete="off" aria-hidden="true" readOnly />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full px-6 py-3 bg-primary-500 text-foreground-950 font-label text-xs uppercase tracking-[0.1em] hover:bg-primary-600 transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Submitting..." : "Submit Application"}
      </button>
      {status === "success" && (
        <p className="text-sm text-primary-700 text-center">
          Thank you! Your application has been received. Our hiring manager will contact you within 5 business days.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600 text-center">
          {error || "Something went wrong. Please try again."}
        </p>
      )}
      <p className="text-xs text-foreground-500 text-center">
        Note: We will contact you to arrange delivery of your completed application and supporting documents.
      </p>
    </form>
  );
}
