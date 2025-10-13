import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { URL_IMAGES } from "../../constants/URLs";
import { WatchButtonStyle } from "./style/WatchButton.styled";
import { useEffect } from "react";
import type { FocusKeyProps } from "../../MovieType";

export function WatchButton({ focusKey: focusKeyParam }: FocusKeyProps) {
  const { ref, focused, focusSelf } = useFocusable({
    focusKey: focusKeyParam,
    onEnterPress: () => {
      console.log("Playing movie...");
    },
  });

  useEffect(() => {
    focusSelf();
  }, [focusSelf]);
  return (
    <WatchButtonStyle ref={ref} $focused={focused}>
      <img src={URL_IMAGES.PLAY} />
      WATCH NOW
    </WatchButtonStyle>
  );
}
