import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton, MediaDetailContainer } from "./style/MediaDetails.styled";
import { URL_IMAGES } from "../../constants/URLs";
import type { FocusKeyProps } from "../../MovieType";
import { MediaDescription } from "./components/MediaDescription";

export function MediaDetails({ focusKey: focusKeyParam }: FocusKeyProps) {
  const { id, type } = useParams<{ id: string; type: string }>();
  const navigate = useNavigate();

  const { ref, focused } = useFocusable({
    focusKey: focusKeyParam,

    onEnterPress: () => {
      navigate(-1);
    },
  });
  if (id === undefined) return;
  return (
    <MediaDetailContainer>
      <BackButton ref={ref} $focused={focused}>
        <img src={URL_IMAGES.BACK_ICON}></img>
      </BackButton>
      <MediaDescription id={id} type={type!} />
    </MediaDetailContainer>
  );
}
