import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { MediaItemProp } from "../../../MovieType";
import { MediaCart, MediaItemBox, TitleStyle } from "../style/MediaContent.styled";
import { useNavigate } from "react-router-dom";

export function MediaItem({ sizeH, sizeW, type, focusKey, onFocus, title, poster_path, id }: MediaItemProp) {
  const navigate = useNavigate();
  const { ref, focused } = useFocusable({
    focusKey,
    onFocus,

    onEnterPress: () => {
      navigate(`/${type}/${id}`);
    },
  });
  const handleClick = () => {
    navigate(`/${type}/${id}`);
  };
  return (
    <MediaCart $sizeW={sizeW} ref={ref} onClick={handleClick}>
      <MediaItemBox $focused={focused} $poster_path={poster_path} $sizeW={sizeW} $sizeH={sizeH}></MediaItemBox>
      <TitleStyle $sizeW={sizeW} $focused={focused}>
        {title}
      </TitleStyle>
    </MediaCart>
  );
}
