import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, MediaDetailContainer } from "./style/MediaDetails.styled";
import { URL_IMAGES } from "../../constants/URLs";
import type { FocusKeyProps } from "../../MovieType";
import { MediaDescription } from "./components/MediaDescription";
import { useState } from "react";
import { DetailPosterPicture } from "../movies/style/Movies.styles";

export function MediaDetails({ focusKey: focusKeyParam }: FocusKeyProps) {
  const { id, type } = useParams<{ id: string; type: "movie" | "series" }>();
  const navigate = useNavigate();
  const [backdrop, setBackdrop] = useState<string | null>(null);

  const { ref, focused } = useFocusable({
    focusKey: focusKeyParam,
    onEnterPress: () => {
      navigate(-1);
    },
  });

  const goBackOnClick = () => {
    navigate(-1);
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
