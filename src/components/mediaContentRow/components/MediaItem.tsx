import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { MediaItemProp } from "../../../MovieType";
import { MediaCart, MediaItemBox, TitleStyle } from "../style/MediaContent.styled";

export function MediaItem({ focusKey, onFocus, title, poster_path }: MediaItemProp) {
  const { ref, focused } = useFocusable({
    focusKey,
    onFocus,
  });

  return (
    <>
      <MediaCart ref={ref}>
        <MediaItemBox $focused={focused} $poster_path={poster_path}></MediaItemBox>
        <TitleStyle $focused={focused}> {title}</TitleStyle>
      </MediaCart>
      <div style={{ minWidth: "10px" }} />
    </>
  );
}
