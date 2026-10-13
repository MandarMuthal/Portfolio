import { Check } from "lucide-react";
import { Section } from "../components/ui";
import { about } from "../data/content";

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-5 text-lg leading-relaxed text-slate-300">{about.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
        <ul className="glass space-y-3 rounded-2xl p-6">
          {about.interests.map((t) => (
            <li key={t} className="flex items-start gap-3"><Check size={18} className="mt-1 shrink-0 text-aqua" aria-hidden="true" /><span>{t}</span></li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
