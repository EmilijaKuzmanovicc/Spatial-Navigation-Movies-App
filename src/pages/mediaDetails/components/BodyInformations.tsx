import { WatchButton } from "../../../components/WatchButton";
import { ITEMS_NAME } from "../../../utils";
import { BodyInformationsStyle } from "../style/MediaDetails.styled";
import type { MediaInformationProps } from "../types/MediaInformationType";
import { Casts } from "./Casts";

export function BodyInformations({ media, type }: MediaInformationProps) {
  return (
    <BodyInformationsStyle>
      <h2>{media.title}</h2>
      <h4>{media.overview?.trim() ? media.overview : "No info for overview"}</h4>
      <Casts media={media} type={type} />
      <WatchButton focusKey={`${ITEMS_NAME.WATCH_BUTTON}`} />
    </BodyInformationsStyle>
  );
}
