import { useFocusable, setFocus } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";
import type { FocusKeyProps } from "../../pages/mediaDetails/types/MediaInformationType";
import { ITEMS_NAME, URL_IMAGES } from "../../utils";
import { WatchButtonStyle } from "./style/WatchButton.styled";

export function WatchButton({ focusKey: focusKeyParam }: FocusKeyProps) {
  const { ref, focused } = useFocusable({
    focusKey: focusKeyParam,
    onEnterPress: () => {
      console.log("Playing movie...");
    },
  });

  useEffect(() => {
    setFocus(`${ITEMS_NAME.WATCH_BUTTON}`);
  }, []);

  return (
    <WatchButtonStyle ref={ref} $focused={focused}>
      <img src={URL_IMAGES.PLAY} />
      WATCH NOW
    </WatchButtonStyle>
  );
}
