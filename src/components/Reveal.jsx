import { useEffect, useRef } from 'react';

export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (reducedMotion.matches || !window.IntersectionObserver || !element?.animate) return;
    let animation;
    const observer = new IntersectionObserver(entries => {
      if (!entries[0].isIntersecting) return;
      animation = element.animate([{ opacity: 0.6, transform: 'translateY(18px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 480, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)' });
      observer.disconnect();
    }, { threshold: 0.08 });
    observer.observe(element);
    return () => { observer.disconnect(); animation?.cancel(); };
  }, []);
  return <div ref={ref} className={className}>{children}</div>;
}
