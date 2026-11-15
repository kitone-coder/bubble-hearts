import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';

const BUBBLES = [
  { size: 220, left: '6%', top: '18%', color: 'blue' },
  { size: 120, left: '82%', top: '12%', color: 'red' },
  { size: 300, left: '70%', top: '58%', color: 'blue' },
  { size: 90, left: '22%', top: '70%', color: 'red' },
  { size: 160, left: '48%', top: '8%', color: 'blue' },
];

export default function FloatingBubbles() {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return undefined;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.bubble').forEach((bubble, i) => {
        gsap.to(bubble, {
          y: gsap.utils.random(-40, 40),
          x: gsap.utils.random(-30, 30),
          duration: gsap.utils.random(4, 7),
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.3,
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bubbles" ref={ref} aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className={`bubble bubble-${b.color}`}
          style={{ width: b.size, height: b.size, left: b.left, top: b.top }}
        />
      ))}
    </div>
  );
}
