import { useEffect } from "react";

export function useMouseEdgeScroll(scrollRef: React.RefObject<HTMLDivElement | null>, speed = 6, threshold = 50) {
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollDirection = 0;
    let animationFrame: number | null = null;

    const scrollStep = () => {
      if (!scrollContainer) return;
      if (scrollDirection !== 0) {
        scrollContainer.scrollLeft += scrollDirection * speed;
        animationFrame = requestAnimationFrame(scrollStep);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = scrollContainer.getBoundingClientRect();
      if (e.clientX < rect.left + threshold) {
        scrollDirection = -1;
        if (!animationFrame) animationFrame = requestAnimationFrame(scrollStep);
      } else if (e.clientX > rect.right - threshold) {
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

    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [scrollRef, speed, threshold]);
}
