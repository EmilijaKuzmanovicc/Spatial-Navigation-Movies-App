import { HeaderInformations, TextMovieStyle } from "../style/MediaDetails.styled";
import type { MediaInformationProps } from "../types/MediaInformationType";
import { GenreInformations } from "./GenreInformations";

export function MediaInformationHeader({ movie }: MediaInformationProps) {
  const year = "release_date" in movie ? (movie.release_date ? new Date(movie.release_date).getFullYear() : "No date info") : movie.first_air_date ? new Date(movie.first_air_date).getFullYear() : "No date info";
  const endYear = "last_air_date" in movie && movie.last_air_date ? new Date(movie.last_air_date).getFullYear() : null;

  return (
    <HeaderInformations>
      <GenreInformations genres={movie!.genres ? movie.genres : []} />
      {"release_date" in movie ? <TextMovieStyle>{movie?.runtime} Minutes</TextMovieStyle> : <></>}
      {"first_air_date" in movie ? year + ` - ` + endYear : ""}
      <TextMovieStyle>
        {movie!.origin_country} - {"release_date" in movie ? year + ` - ` : ""}
        {movie!.adult ? "G" : "PG"} - IMDb: {movie!.vote_average.toFixed(1)}
      </TextMovieStyle>
    </HeaderInformations>
  );
}
