import { useState } from "react";
import { useForm } from "react-hook-form";
import { Mail, Copy, Check, Github, Linkedin, Send, AlertCircle, CheckCircle2 } from "lucide-react";
import { Section } from "../components/ui";
import { profile } from "../data/content";

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT;
const field = "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder:text-slate-500 focus:border-glow/60";

function Field({ label, error, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-slate-300">{label}</span>
      {children}
      {error && <span role="alert" className="mt-1 block text-sm text-rose-400">{error}</span>}
    </label>
  );
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000); }
    catch { setStatus({ ok: false, msg: `Couldn't copy automatically. My email is ${profile.email}.` }); }
  };

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error();
        setStatus({ ok: true, msg: "Message sent. Thanks for reaching out, I'll reply soon." });
      } else {
        const q = `subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`${data.message}\n\n${data.name} (${data.email})`)}`;
        window.location.href = `mailto:${profile.email}?${q}`;
        setStatus({ ok: true, msg: "Opening your email app with the message ready to send." });
      }
      reset();
    } catch {
      setStatus({ ok: false, msg: `Message failed to send. Please try again or email ${profile.email} directly.` });
    }
  };

  return (
    <Section id="contact" title="Let's work together" intro="Have a role, project or question? Send a message and I'll get back to you.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-4">
          <div className="glass flex items-center justify-between gap-3 rounded-2xl p-5">
            <a href={`mailto:${profile.email}`} className="flex min-w-0 items-center gap-3 text-white"><Mail className="shrink-0 text-glow" size={20} aria-hidden="true" /><span className="truncate">{profile.email}</span></a>
            <button type="button" onClick={copy} className="btn btn-ghost shrink-0 !px-3 !py-2" aria-label="Copy email address">{copied ? <Check size={16} /> : <Copy size={16} />}{copied ? "Copied" : "Copy"}</button>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="glass flex items-center gap-3 rounded-2xl p-5 text-white hover:border-glow/40"><Github className="text-glow" size={20} aria-hidden="true" />GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="glass flex items-center gap-3 rounded-2xl p-5 text-white hover:border-glow/40"><Linkedin className="text-glow" size={20} aria-hidden="true" />LinkedIn</a>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate className="glass space-y-4 rounded-2xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" error={errors.name?.message}><input className={field} autoComplete="name" placeholder="Your name" {...register("name", { required: "Enter your name.", minLength: { value: 2, message: "Name must be at least 2 characters." } })} /></Field>
            <Field label="Email" error={errors.email?.message}><input className={field} type="email" autoComplete="email" placeholder="you@company.com" {...register("email", { required: "Enter your email.", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email address." } })} /></Field>
          </div>
          <Field label="Subject" error={errors.subject?.message}><input className={field} placeholder="What is this about?" {...register("subject", { required: "Enter a subject.", maxLength: { value: 120, message: "Keep the subject under 120 characters." } })} /></Field>
          <Field label="Message" error={errors.message?.message}><textarea rows={5} className={field} placeholder="Tell me a bit about it..." {...register("message", { required: "Enter a message.", minLength: { value: 10, message: "Message must be at least 10 characters." }, maxLength: { value: 2000, message: "Keep the message under 2000 characters." } })} /></Field>
          <button type="submit" disabled={isSubmitting} className="btn btn-primary"><Send size={16} />{isSubmitting ? "Sending..." : "Send message"}</button>
          {status && (
            <p role={status.ok ? "status" : "alert"} className={`flex items-start gap-2 text-sm ${status.ok ? "text-emerald-400" : "text-rose-400"}`}>
              {status.ok ? <CheckCircle2 size={18} className="shrink-0" /> : <AlertCircle size={18} className="shrink-0" />}{status.msg}
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
