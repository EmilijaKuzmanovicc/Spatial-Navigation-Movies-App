import { BodyInformationsStyle } from "../style/MediaDetails.styled";
import { WatchButton } from "../../../components/WatchButton/WatchButton";
import { Casts } from "./Casts";
import type { MediaInformationProps } from "../types/MediaInformationType";

export function BodyInformations({ media, type }: MediaInformationProps) {
  return (
    <BodyInformationsStyle>
      <h2>{media.title}</h2>
      <h4>{media.overview}</h4> <Casts media={media} type={type} />
      <WatchButton focusKey={`WATCH_BUTTON_${media.id}`} />
    </BodyInformationsStyle>
  );
}
