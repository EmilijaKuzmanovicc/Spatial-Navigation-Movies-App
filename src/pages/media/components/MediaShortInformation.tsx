import { MediaShortInformationStyle } from "../../mediaDetails/style/MediaDetails.styled";
import type { ShortInfomation } from "../Types/MovieType";

export function MediaShortInformation({ title, overview }: ShortInfomation) {
  return (
    <MediaShortInformationStyle>
      <h1>{title}</h1>
      <h3>{overview}</h3>
    </MediaShortInformationStyle>
  );
}
