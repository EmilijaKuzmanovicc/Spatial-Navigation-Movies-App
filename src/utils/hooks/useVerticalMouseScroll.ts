import { useEffect, type RefObject } from "react";

export function useVerticalMouseScroll(scrollRef: RefObject<HTMLDivElement | null>, speed = 6, threshold = 50) {
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollDirection = 0;
    let animationFrame: number | null = null;

    const scrollStep = () => {
      if (!container) return;
      if (scrollDirection !== 0) {
        container.scrollTop += scrollDirection * speed;
        animationFrame = requestAnimationFrame(scrollStep);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();

      if (e.clientY < rect.top + threshold) {
        scrollDirection = -1;
        if (!animationFrame) animationFrame = requestAnimationFrame(scrollStep);
      } else if (e.clientY > rect.bottom - threshold) {
        scrollDirection = 1;
        if (!animationFrame) animationFrame = requestAnimationFrame(scrollStep);
      } else {
        scrollDirection = 0;
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
          animationFrame = null;
        }
      }
    };

    const handleMouseLeave = () => {
      scrollDirection = 0;
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
        animationFrame = null;
      }
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [scrollRef, speed, threshold]);
}
