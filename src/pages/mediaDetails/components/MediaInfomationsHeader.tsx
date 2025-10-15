import { HeaderInformations, TextMovieStyle } from "../style/MediaDetails.styled";
import type { MediaInformationProps } from "../types/MediaInformationType";
import { GenreInformations } from "./GenreInformations";

export function MediaInformationHeader({ movie }: MediaInformationProps) {
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : "No date info";
  const endYear = movie.last_air_date ? new Date(movie.last_air_date).getFullYear() : "No date info";

  return (
    <HeaderInformations>
      <GenreInformations genres={movie!.genres ? movie.genres : []} />
      <TextMovieStyle>{movie.type === "series" ? year + ` - ` + endYear : movie?.runtime + ` Minutes`}</TextMovieStyle>
      <TextMovieStyle>
        {movie!.origin_country} - {movie.type === "series" ? "" : year + ` - `}
        {movie!.adult ? "G" : "PG"} - IMDb: {movie!.vote_average.toFixed(1)}
      </TextMovieStyle>
    </HeaderInformations>
  );
}
