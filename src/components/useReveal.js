import { useEffect, useRef } from 'react';

export default function useReveal(threshold = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      },
      { threshold }
    );
    // Observe all .reveal, .reveal-left, .reveal-right inside
    const targets = el.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    targets.forEach(t => obs.observe(t));
    return () => obs.disconnect();
  }, [threshold]);

  return ref;
}
