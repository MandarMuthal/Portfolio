import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Section, Icon, Badge, LinkButton } from "../components/ui";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Featured projects" intro="Practical applications built to solve real, everyday problems.">
      {projects.length === 0 ? (
        <p className="glass rounded-2xl p-8 text-mist">No projects yet. Add one in src/data/content.js.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <motion.article key={p.title} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} className="glass group flex flex-col overflow-hidden rounded-2xl hover:border-glow/40">
              <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${p.gradient}`} aria-hidden="true">
                <div className="grid-bg absolute inset-0 opacity-60" />
                <Icon name={p.icon} size={56} className="relative text-white/90 transition duration-300 group-hover:scale-110" strokeWidth={1.2} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-bold text-white">{p.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <LinkButton href={p.live} variant="primary"><ExternalLink size={15} />Live Demo</LinkButton>
                  <LinkButton href={p.repo}><Github size={15} />GitHub</LinkButton>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </Section>
  );
}
