import { setFocus } from "@noriginmedia/norigin-spatial-navigation";

export const hoverToFocus = (focusKey: string, isFocused: () => boolean) => {
  return () => {
    if (!isFocused()) {
      setFocus(focusKey);
    }
  };
};
