import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { DATA_TYPE, useMediaNavigation, URL_IMAGES } from "../../utils";
import { DetailPosterPicture } from "../movies/style/Movies.styles";
import { MediaDescription } from "./components/MediaDescription";
import { BackButton, MediaDetailContainer } from "./style/MediaDetails.styled";
import type { FocusKeyProps } from "./types/MediaInformationType";

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

  return (
    <>
      <DetailPosterPicture $picture={backdrop!} />
      <MediaDetailContainer>
        <BackButton ref={ref} $focused={focused} onClick={goBackOnClick}>
          <img src={URL_IMAGES.BACK_ICON}></img>
        </BackButton>
        <MediaDescription id={id} type={type} setBackdrop={setBackdrop} />
      </MediaDetailContainer>
    </>
  );
}
