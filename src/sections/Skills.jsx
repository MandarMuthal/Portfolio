import { Section, Icon, Badge } from "../components/ui";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Technical skills" intro="Technologies I use in my projects and coursework.">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g) => (
          <div key={g.title} className="glass rounded-2xl p-6 transition hover:border-glow/40">
            <div className="mb-5 flex items-center gap-3">
              <span className="rounded-xl bg-glow/15 p-2.5 text-glow"><Icon name={g.icon} size={20} /></span>
              <h3 className="font-display text-xl font-semibold text-white">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">{g.items.map((s) => <Badge key={s}>{s}</Badge>)}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
