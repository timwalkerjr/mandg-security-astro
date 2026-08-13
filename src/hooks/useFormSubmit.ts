import { useState, FormEvent } from "react";

export type FormStatus = "idle" | "submitting" | "success" | "error";

/**
 * Shared form submission hook (Formspree).
 * - Client-side honeypot: if the hidden field is filled (a bot), show generic
 *   success without submitting.
 * - Submits the form as multipart FormData with `Accept: application/json`.
 * - Maps Formspree's response contract: res.ok === success; a non-ok response
 *   carries `{ errors: [{ message }] }`.
 */
export function useFormSubmit(submitUrl: string, honeypotName: string) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Honeypot — if a bot filled it, fake success without submitting.
    const hp = form.querySelector<HTMLInputElement>(`input[name="${honeypotName}"]`);
    if (hp && hp.value.trim() !== "") {
      setStatus("success");
      form.reset();
      return;
    }

    setStatus("submitting");
    setError("");

    const formData = new FormData(form);
    formData.delete(honeypotName);

    try {
      const res = await fetch(submitUrl, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      let msg = "Something went wrong. Please try again.";
      try {
        const data = await res.json();
        if (Array.isArray(data?.errors) && data.errors.length) {
          msg =
            data.errors
              .map((x: { message?: string }) => x.message)
              .filter(Boolean)
              .join(", ") || msg;
        }
      } catch {
        // non-JSON error response — keep the generic message
      }
      setStatus("error");
      setError(msg);
    } catch {
      setStatus("error");
      setError("Network error. Please try again.");
    }
  };

  return { status, error, handleSubmit };
}
