import { motion } from "framer-motion";
import { Section, Icon } from "../components/ui";
import { education, experience } from "../data/content";

function Timeline({ heading, items }) {
  return (
    <div>
      <h3 className="mb-8 font-display text-2xl font-semibold text-white">{heading}</h3>
      {items.length === 0 ? (
        <p className="glass rounded-2xl p-6 text-mist">Nothing here yet. Add entries in src/data/content.js.</p>
      ) : (
        <ol className="relative ml-4 border-l border-line">
          {items.map((t) => (
            <motion.li key={t.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-60px" }} className="relative mb-10 pl-8 last:mb-0">
              <span className="absolute -left-[17px] top-0 grid h-8 w-8 place-items-center rounded-full border border-line bg-panel text-glow"><Icon name={t.icon} size={15} /></span>
              <p className="font-mono text-xs text-aqua">{t.period}</p>
              <h4 className="mt-1 font-display text-lg font-semibold text-white">{t.title}</h4>
              <p className="text-sm text-mist">{t.org}</p>
              <p className="mt-2 text-slate-300">{t.description}</p>
            </motion.li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience and education">
      <div className="grid gap-14 lg:grid-cols-2">
        <Timeline heading="Experience" items={experience} />
        <Timeline heading="Education" items={education} />
      </div>
    </Section>
  );
}