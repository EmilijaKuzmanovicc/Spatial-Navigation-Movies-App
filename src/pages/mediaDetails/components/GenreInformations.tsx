import { GenreStyle, TextMovieStyle } from "../style/MediaDetails.styled";
import type { GenreProps } from "../types/MediaInformationType";

export function GenreInformations({ genres }: GenreProps) {
  return (
    <>
      <GenreStyle>
        {genres.map((genre, index) => (
          <TextMovieStyle key={genre.name}>
            {index === 0 ? "" : ","} {genre.name}
          </TextMovieStyle>
        ))}
      </GenreStyle>
    </>
  );
}
