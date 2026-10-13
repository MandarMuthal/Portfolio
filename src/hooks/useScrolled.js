import { useEffect, useState } from "react";
export default function useScrolled(offset = 12) {
  const [scrolled, set] = useState(false);
  useEffect(() => {
    const on = () => set(window.scrollY > offset);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [offset]);
  return scrolled;
}
