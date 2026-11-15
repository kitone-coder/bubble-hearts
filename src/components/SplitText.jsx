import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SplitText({ text, as: Tag = 'h2', className = '', delay = 0 }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(ref.current.querySelectorAll('.char'), {
        yPercent: 110,
        opacity: 0,
        rotate: 6,
        duration: 0.9,
        ease: 'power4.out',
        stagger: 0.03,
        delay,
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, [text, delay]);

  const words = text.split(' ');

  return (
    <Tag ref={ref} className={`split ${className}`} aria-label={text}>
      {words.map((word, w) => (
        <span className="word" key={w} aria-hidden="true">
          {word.split('').map((char, c) => (
            <span className="char-mask" key={c}>
              <span className="char">{char}</span>
            </span>
          ))}
          {w < words.length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </Tag>
  );
}
