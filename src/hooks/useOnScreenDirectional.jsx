import { useEffect, useState, useRef } from "react";

export function useOnScreenDirectional(initialVisibility = false) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(initialVisibility);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return [ref, isVisible];
}
