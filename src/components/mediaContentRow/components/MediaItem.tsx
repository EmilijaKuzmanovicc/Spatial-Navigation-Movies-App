import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { MediaItemProp } from "../../../MovieType";
import { MediaCart, MediaItemBox, TitleStyle } from "../style/MediaContent.styled";
import { useNavigate } from "react-router-dom";

export function MediaItem({ type, focusKey, onFocus, title, poster_path, id }: MediaItemProp) {
  const navigate = useNavigate();
  const { ref, focused } = useFocusable({
    focusKey,
    onFocus,
    onEnterPress: () => {
      navigate(`${type}/${id}`);
    },
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
