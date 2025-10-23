import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { FocusKeyProps } from "../../pages/mediaDetails/types/MediaInformationType";
import { hoverToFocus, ITEMS_NAME, URL_IMAGES } from "../../utils";
import { useEffect } from "react";
import { WatchButtonStyle } from "./style/WatchButton.styled";

export function WatchButton({ focusKey: focusKeyParam }: FocusKeyProps) {
  const { ref, focused } = useFocusable({
    focusKey: focusKeyParam,
    onEnterPress: () => {
      console.log("Playing movie...");
    },
  });
  const handleMouseEnter = hoverToFocus(focusKeyParam, () => focused);
  const onMouseClick = () => {
    console.log("Playing movie...");
  };
  useEffect(() => {
    setFocus(`${ITEMS_NAME.WATCH_BUTTON}`);
  }, []);

  return (
    <WatchButtonStyle ref={ref} $focused={focused} onMouseEnter={handleMouseEnter} onClick={onMouseClick}>
      <img src={URL_IMAGES.PLAY} />
      WATCH NOW
    </WatchButtonStyle>
  );
}
