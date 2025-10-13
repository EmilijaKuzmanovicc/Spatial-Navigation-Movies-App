import { useEffect, useState } from "react";
import type { MovieDetailsProp, MovieInformation } from "../types/MediaInformationType";
import { MediaDetailsStyle, MediaInformationBody, PosterPath } from "../style/MediaDetails.styled";
import { BodyInformations } from "./BodyInformations";
import type { SeriesInformation } from "../types/SeriesInformationType";
import { PATHS } from "../../../constants/URLs";
import { MediaInformationHeader } from "./MediaInfomationsHeader";
import { getDetails } from "../../../api/MovieApi";

export function MediaDescription({ id, type }: MovieDetailsProp) {
  const [movieInfomations, setMovieInfomations] = useState<MovieInformation | SeriesInformation>();
  const fetchData = async () => {
    const data = type === PATHS.MOVIE_TYPE ? await getDetails<MovieInformation>(id, type) : await getDetails<SeriesInformation>(id, type);
    setMovieInfomations(data);
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  if (!movieInfomations) {
    return null;
  }
  return (
    <MediaDetailsStyle>
      <MediaInformationHeader movie={movieInfomations} type={type} />
      <MediaInformationBody>
        <PosterPath $backgroundColor={movieInfomations.poster_path ? movieInfomations.poster_path : ""} />
        <BodyInformations movie={movieInfomations} type={type} />
      </MediaInformationBody>
    </MediaDetailsStyle>
  );
}
