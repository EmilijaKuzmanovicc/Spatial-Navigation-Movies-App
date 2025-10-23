import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { MediaItemProp } from "../../../pages/mediaDetails/types/MediaInformationType";
import { useMediaNavigation, hoverToFocus } from "../../../utils";
import { MediaCart, MediaItemBox, TitleStyle } from "../style/MediaContent.styled";

export function MediaItem({ sizeH, sizeW, type, focusKey, onFocus, title, poster_path, id }: MediaItemProp) {
  const { navigateToMedia } = useMediaNavigation(`/${type}/${id}`, id.toString(), focusKey);

  const { ref, focused } = useFocusable({
    focusKey,
    onFocus,
    onEnterPress: () => {
      navigateToMedia();
    },
  });

  const handleClick = () => {
    navigateToMedia();
  };
  const handleMouseEnter = hoverToFocus(focusKey, () => focused);
  return (
    <MediaCart $sizeW={sizeW} ref={ref} onClick={handleClick} onMouseEnter={handleMouseEnter}>
      <MediaItemBox $focused={focused} $poster_path={poster_path} $sizeW={sizeW} $sizeH={sizeH}></MediaItemBox>
      <TitleStyle $sizeW={sizeW} $focused={focused}>
        {title}
      </TitleStyle>
    </MediaCart>
  );
}
