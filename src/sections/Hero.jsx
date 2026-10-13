import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { profile } from "../data/content";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI((n) => (n + 1) % profile.roles.length), 2400); return () => clearInterval(t); }, []);
  return (
    <span className="relative inline-block h-8 overflow-hidden align-bottom font-mono text-aqua" aria-live="off">
      <AnimatePresence mode="wait">
        <motion.span key={i} initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -24, opacity: 0 }} transition={{ duration: 0.35 }} className="block">{profile.roles[i]}</motion.span>
      </AnimatePresence>
    </span>
  );
}

function CodeCard() {
  const L = ({ n, children }) => <div className="flex gap-4"><span className="select-none text-slate-600">{n}</span><span>{children}</span></div>;
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="glass relative w-full max-w-md rounded-2xl p-5 font-mono text-[13px] leading-7 shadow-[0_0_80px_-20px_#8b9cff55]">
      <div className="mb-4 flex gap-1.5" aria-hidden="true"><i className="h-3 w-3 rounded-full bg-rose-400/80" /><i className="h-3 w-3 rounded-full bg-amber-300/80" /><i className="h-3 w-3 rounded-full bg-emerald-400/80" /></div>
      <L n="1"><span className="text-glow">const</span> developer = {"{"}</L>
      <L n="2">&nbsp;&nbsp;role: <span className="text-aqua">"Full-Stack"</span>,</L>
      <L n="3">&nbsp;&nbsp;stack: [<span className="text-aqua">"React"</span>, <span className="text-aqua">"Java"</span>, <span className="text-aqua">"Node"</span>],</L>
      <L n="4">&nbsp;&nbsp;studying: <span className="text-aqua">"PGCP-AC @ C-DAC"</span>,</L>
      <L n="5">&nbsp;&nbsp;openToWork: <span className="text-amber-300">true</span>,</L>
      <L n="6">{"}"};</L>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="blob absolute -left-24 top-20 h-80 w-80 rounded-full bg-glow/25 blur-[110px]" aria-hidden="true" />
      <div className="blob absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-aqua/15 blur-[110px]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-4 text-mist">Hi, I'm</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grad-text font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">{profile.name}</motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
            <p className="mt-5 text-lg font-medium text-white sm:text-xl">{profile.headline}</p>
            <p className="mt-3 text-lg text-mist">Currently a <RotatingRole /></p>
            <p className="mt-5 max-w-xl text-mist">{profile.intro}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">Explore My Work</a>
              <a href="#contact" className="btn btn-ghost">Contact Me</a>
              <a aria-label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer" className="ml-2 text-mist hover:text-white"><Github /></a>
              <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-mist hover:text-white"><Linkedin /></a>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center lg:justify-end"><CodeCard /></div>
      </div>
    </section>
  );
}
