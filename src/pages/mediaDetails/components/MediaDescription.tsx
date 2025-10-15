import { useEffect, useState } from "react";
import type { MovieDetailsProp } from "../types/MediaInformationType";
import { MediaDetailsStyle, MediaInformationBody, PosterPath } from "../style/MediaDetails.styled";
import { BodyInformations } from "./BodyInformations";
import type { MediaInformation } from "../types/SeriesInformationType";
import { MediaInformationHeader } from "./MediaInfomationsHeader";
import { getDetails } from "../../../api/MovieApi";

export function MediaDescription({ id, type, setBackdrop }: MovieDetailsProp) {
  const [movieInfomations, setMovieInfomations] = useState<MediaInformation>();

  const fetchData = async () => {
    const data = await getDetails(id, type);
    setMovieInfomations(data);
    if (setBackdrop && data.backdrop_path) {
      setBackdrop(data.backdrop_path);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  if (!movieInfomations) {
    return null;
  }

  return (
    <MediaDetailsStyle>
      <MediaInformationHeader media={movieInfomations} type={type} />
      <MediaInformationBody>
        <PosterPath $backgroundColor={movieInfomations.poster_path ? movieInfomations.poster_path : ""} />
        <BodyInformations media={movieInfomations} type={type} />
      </MediaInformationBody>
    </MediaDetailsStyle>
  );
}
