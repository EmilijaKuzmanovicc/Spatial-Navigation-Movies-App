import { useState, useEffect } from "react";
import { getGenresWithMedia } from "../../api/MovieApi";
import type { GenresWithMediaProps } from "../../pages/mediaDetails/types/MediaInformationType";
import type { DATA_TYPE } from "../constants/Constants";

export const useMediaWithGenres = (type: typeof DATA_TYPE.MOVIE | typeof DATA_TYPE.SERIES) => {
  const [genresWithMedia, setGenresWithMedia] = useState<GenresWithMediaProps[]>([]);

  const fetchGenres = async () => {
    const data = await getGenresWithMedia(type);
    setGenresWithMedia(data);
  };

  useEffect(() => {
    fetchGenres();
  }, [type]);

  return genresWithMedia;
};
