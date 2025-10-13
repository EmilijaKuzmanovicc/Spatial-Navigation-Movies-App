import { BodyInformationsStyle } from "../style/MediaDetails.styled";
import { WatchButton } from "../../../components/WatchButton/WatchButton";
import { Casts } from "./Casts";
import type { MediaInformationProps } from "../types/MediaInformationType";

export function BodyInformations({ movie, type }: MediaInformationProps) {
  return (
    <BodyInformationsStyle>
      <h2>{"release_date" in movie ? movie.title : movie.name}</h2>
      <h4>{movie.overview}</h4> <Casts movie={movie} type={type} />
      <WatchButton focusKey={`WATCH_BUTTON_${movie.id}`} />
    </BodyInformationsStyle>
  );
}
