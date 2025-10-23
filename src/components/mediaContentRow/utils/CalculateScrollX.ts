import type { FocusableComponentLayout } from "@noriginmedia/norigin-spatial-navigation";
import type { RefObject } from "react";

export function CalculateScrollX(layout: FocusableComponentLayout, scrollRef: RefObject<HTMLDivElement | null>): number | null {
  const container = scrollRef.current;
  if (!container) return null;

  const elementLeft = layout.x;
  const elementRight = layout.x + layout.width;
  const visibleLeft = container.scrollLeft;
  const visibleRight = container.scrollLeft + container.clientWidth;

  let newScrollLeft = container.scrollLeft;

  if (elementLeft < visibleLeft) {
    newScrollLeft = elementLeft - 15;
  }

  if (elementRight > visibleRight) {
    newScrollLeft = elementRight - container.clientWidth + 50;
  }

  return Math.max(0, Math.min(newScrollLeft, container.scrollWidth - container.clientWidth));
}
