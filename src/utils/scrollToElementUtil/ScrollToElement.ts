import type { RefObject } from "react";
import type { ScrollToProps } from "../../pages/movies/Types/MovieType";

export const scrollToElement = (ref: RefObject<HTMLElement | null>, { x, y }: ScrollToProps = {}) => {
  if (!ref.current) return;

  ref.current.scrollTo({
    top: y ?? ref.current.scrollTop,
    left: x ?? ref.current.scrollLeft,
    behavior: "smooth",
  });
};
