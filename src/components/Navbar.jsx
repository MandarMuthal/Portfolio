import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { profile, navLinks } from "../data/content";
import useScrolled from "../hooks/useScrolled";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const href = (l) => `#${l.toLowerCase()}`;
  const go = (e, l) => {
  e.preventDefault();
  setOpen(false);
  setTimeout(() => {
    document.getElementById(l.toLowerCase())?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 250);
};

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "glass border-x-0 border-t-0 bg-ink/70" : ""}`}>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" className="font-display text-lg font-bold text-white">{profile.initials}<span className="text-glow">.</span></a>
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => <li key={l}><a href={href(l)} className="text-sm text-mist transition hover:text-white">{l}</a></li>)}
        </ul>
        <a href={profile.resume} download className="btn btn-ghost hidden md:inline-flex"><Download size={16} />Resume</a>
        <button className="rounded-lg p-2 text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="glass overflow-hidden border-x-0 bg-ink/95 px-5 md:hidden">
            {navLinks.map((l) => <li key={l}><a href={href(l)} onClick={(e) => go(e, l)} className="block py-3 text-slate-200">{l}</a></li>)}
            <li className="py-3"><a href={profile.resume} download className="btn btn-primary"><Download size={16} />Download resume</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
