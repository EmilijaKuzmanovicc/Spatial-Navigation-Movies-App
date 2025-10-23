import { useEffect, type RefObject } from "react";

export function useMouseEdgeScroll(scrollRef: RefObject<HTMLDivElement | null>, speed = 8, threshold = 150) {
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let scrollDirection = 0;
    let animationFrame: number | null = null;

    const scrollStep = () => {
      if (!container) return;

      if (scrollDirection !== 0) {
        const maxScrollLeft = container.scrollWidth - container.clientWidth;

        if ((scrollDirection === -1 && container.scrollLeft > 0) || (scrollDirection === 1 && container.scrollLeft < maxScrollLeft)) {
          container.scrollLeft += scrollDirection * speed;
        }
      }

      animationFrame = requestAnimationFrame(scrollStep);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!container) return;
      const rect = container.getBoundingClientRect();

      if (e.clientX < rect.left + threshold) {
        scrollDirection = -1;
        if (!animationFrame) animationFrame = requestAnimationFrame(scrollStep);
      } else if (e.clientX > rect.right - threshold) {
        scrollDirection = 1;
        if (!animationFrame) animationFrame = requestAnimationFrame(scrollStep);
      } else {
        scrollDirection = 0;
      }
    };

    const handleMouseLeave = () => {
      scrollDirection = 0;
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
