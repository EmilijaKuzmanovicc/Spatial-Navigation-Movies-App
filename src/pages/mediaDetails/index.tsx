import { useParams } from "react-router-dom";
import { hoverToFocus, URL_IMAGES, useMediaNavigation, type DATA_TYPE } from "../../utils";
import { useState } from "react";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { FocusKeyProps } from "./types/MediaInformationType";
import { BackButton, MediaDetailContainer } from "./style/MediaDetails.styled";
import { MediaDescription } from "./components/MediaDescription";
import { DetailPosterPicture } from "../media/style/Movies.styles";

export function MediaDetails({ focusKey: focusKeyParam }: FocusKeyProps) {
  const { id, type } = useParams<{ id: string; type: typeof DATA_TYPE.MOVIE | typeof DATA_TYPE.SERIES }>();
  const [backdrop, setBackdrop] = useState<string | null>(null);
  const { navigateBack } = useMediaNavigation();

  const { ref, focused } = useFocusable({
    focusKey: focusKeyParam,
    onEnterPress: () => {
      navigateBack();
    },
  });

  const goBackOnClick = () => {
    navigateBack();
  };

  if (id === undefined || type === undefined) return;

  const handleMouseEnter = hoverToFocus(focusKeyParam, () => focused);

  return (
    <>
      <DetailPosterPicture $picture={backdrop!} />
      <MediaDetailContainer>
        <BackButton ref={ref} $focused={focused} onClick={goBackOnClick} onMouseEnter={handleMouseEnter}>
          <img src={URL_IMAGES.BACK_ICON}></img>
        </BackButton>
        <MediaDescription id={id} type={type} setBackdrop={setBackdrop} />
      </MediaDetailContainer>
    </>
  );
}
