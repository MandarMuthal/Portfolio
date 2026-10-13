import * as Icons from "lucide-react";
import { motion } from "framer-motion";

export const Icon = ({ name, ...p }) => { const C = Icons[name] || Icons.Circle; return <C aria-hidden="true" {...p} />; };

export function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="relative px-5 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className="mb-12 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-5xl">{title}</h2>
          {intro && <p className="mt-4 text-mist">{intro}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export const Badge = ({ children }) => (
  <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300">{children}</span>
);

export function LinkButton({ href, children, variant = "ghost", ...rest }) {
  if (!href) return <button type="button" disabled className={`btn btn-${variant}`} title="Link coming soon">{children}</button>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={`btn btn-${variant}`} {...rest}>{children}</a>;
}
