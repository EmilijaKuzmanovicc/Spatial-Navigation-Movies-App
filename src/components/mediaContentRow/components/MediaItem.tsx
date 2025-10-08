import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { MediaItemProp } from "../../../MovieType";
import { MediaCart, MediaItemBox, RowCard, TitleStyle } from "../style/MediaContent.styled";

export function MediaItem({ focusKey, onFocus, title, poster_path }: MediaItemProp) {
  const { ref, focused } = useFocusable({
    focusKey,
    onFocus,
  });

  return (
    <>
      <RowCard ref={ref}>
        <MediaCart>
          <MediaItemBox $focused={focused} $poster_path={poster_path}></MediaItemBox>
          <TitleStyle $focused={focused}> {title}</TitleStyle>
        </MediaCart>
      </RowCard>
      <div style={{ minWidth: "10px" }} />
    </>
  );
}
