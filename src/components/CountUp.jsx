import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CountUp({ to, suffix = '' }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.textContent = to + suffix;
      return undefined;
    }
    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value: to,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => { el.textContent = Math.round(counter.value) + suffix; },
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      });
    });
    return () => ctx.revert();
  }, [to, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}
