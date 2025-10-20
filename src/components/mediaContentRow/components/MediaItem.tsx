import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { MediaCart, MediaItemBox, TitleStyle } from "../style/MediaContent.styled";
import type { MediaItemProp } from "../../../pages/mediaDetails/types/MediaInformationType";
import { useMediaNavigation } from "../../../utils";

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

  return (
    <MediaCart $sizeW={sizeW} ref={ref} onClick={handleClick}>
      <MediaItemBox $focused={focused} $poster_path={poster_path} $sizeW={sizeW} $sizeH={sizeH}></MediaItemBox>
      <TitleStyle $sizeW={sizeW} $focused={focused}>
        {title}
      </TitleStyle>
    </MediaCart>
  );
}
