import { HeaderInformations, TextMovieStyle } from "../style/MediaDetails.styled";
import type { MediaInformationProps } from "../types/MediaInformationType";
import { GenreInformations } from "./GenreInformations";

export function MediaInformationHeader({ media }: MediaInformationProps) {
  const year = media.release_date ? new Date(media.release_date).getFullYear() : "No date info";
  const endYear = media.last_air_date ? new Date(media.last_air_date).getFullYear() : "No date info";

  return (
    <HeaderInformations>
      <GenreInformations genres={media!.genres ? media.genres : []} />
      <TextMovieStyle>{media.type === "series" ? year + ` - ` + endYear : media?.runtime + ` Minutes`}</TextMovieStyle>
      <TextMovieStyle>
        {media!.origin_country} - {media.type === "series" ? "" : year + ` - `}
        {media!.adult ? "G" : "PG"} - IMDb: {media!.vote_average.toFixed(1)}
      </TextMovieStyle>
    </HeaderInformations>
  );
}
