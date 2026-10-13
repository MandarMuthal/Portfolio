import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile, navLinks } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm text-mist">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <nav aria-label="Footer"><ul className="flex flex-wrap justify-center gap-5">
          {navLinks.map((l) => <li key={l}><a className="text-sm text-mist hover:text-white" href={`#${l.toLowerCase()}`}>{l}</a></li>)}
        </ul></nav>
        <div className="flex items-center gap-3">
          <a aria-label="GitHub" href={profile.github} target="_blank" rel="noopener noreferrer" className="text-mist hover:text-white"><Github size={20} /></a>
          <a aria-label="LinkedIn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-mist hover:text-white"><Linkedin size={20} /></a>
          <a aria-label="Back to top" href="#home" className="ml-2 rounded-full border border-white/10 p-2 text-mist hover:border-glow/60 hover:text-white"><ArrowUp size={16} /></a>
        </div>
      </div>
    </footer>
  );
}
