import type { MediaSection, PaginatedResponse, GenresWithMediaProps, Genre, UnifiedMedia, ActorsDirectorProps, CreditsResponse } from "../pages/mediaDetails/types/MediaInformationType";
import type { Series, MediaInformation } from "../pages/mediaDetails/types/SeriesInformationType";
import type { Movie } from "../pages/movies/Types/MovieType";
import { DATA_TYPE, ITEMS_NAME, URLS_API } from "../utils";
import { api } from "./Axios";

export const getPopularMoviesAndSeries = async (): Promise<MediaSection[]> => {
  const { data: moviesData } = await api.get<PaginatedResponse<Movie>>(URLS_API.GET_MOVIES);
  const { data: seriesData } = await api.get<PaginatedResponse<Series>>(URLS_API.GET_SERIES);

  const dataMedia: MediaSection[] = [
    {
      name: ITEMS_NAME.MOVIES,
      items: moviesData.results.slice(0, 5).map(({ id, title, poster_path, overview }) => ({
        type: DATA_TYPE.MOVIE,
        id,
        title,
        poster_path,
        overview,
      })),
    },
    {
      name: ITEMS_NAME.SERIES,
      items: seriesData.results.slice(0, 5).map(({ id, name, poster_path, overview }) => ({
        type: DATA_TYPE.SERIES,
        id,
        title: name,
        poster_path,
        overview,
      })),
    },
  ];
  return dataMedia;
};

export const getGenresWithMedia = async (type: typeof DATA_TYPE.MOVIE | typeof DATA_TYPE.SERIES): Promise<GenresWithMediaProps[]> => {
  try {
    const isMovie = type === DATA_TYPE.MOVIE;

    const genresUrl = isMovie ? URLS_API.GET_MOVIE_GENRES_LIST : URLS_API.GET_SERIES_GENRES_LIST;
    const itemsUrl = isMovie ? URLS_API.GET_MOVIES_BY_GENRES : URLS_API.GET_SERIES_BY_GENRES;
    const detailImagesUrl = isMovie ? URLS_API.MOVIE_DETAIL : URLS_API.SERIES_DETAIL;

    const { data: genresData } = await api.get<{ genres: Genre[] }>(genresUrl);
    const genres: Genre[] = genresData.genres;

    const addedIds = new Set<number>();

    const mediaByGenre = await Promise.all(
      genres.map(async (genre: Genre) => {
        const uniqueMedia: UnifiedMedia[] = [];
        let page = 1;

        while (uniqueMedia.length < 10) {
          const { data: mediaData } = await api.get<PaginatedResponse<UnifiedMedia>>(itemsUrl, {
            params: { with_genres: genre.id, page },
          });

          if (!mediaData.results || mediaData.results.length === 0) break;

          for (const item of mediaData.results) {
            if (uniqueMedia.length >= 10) break;
            if (!addedIds.has(item.id)) {
              uniqueMedia.push(item);
              addedIds.add(item.id);
            }
          }

          page++;
        }

        const mediaWithBackdrop = await Promise.all(
          uniqueMedia.map(async ({ id, title, name, poster_path, overview, backdrop_path }) => {
            let finalBackdrop = backdrop_path;

            if (!finalBackdrop && detailImagesUrl) {
              try {
                const { data: imagesData } = await api.get<{ backdrops: { file_path: string }[] }>(`${detailImagesUrl}/${id}${URLS_API.IMAGES}`);
                if (imagesData.backdrops && imagesData.backdrops.length > 0) {
                  finalBackdrop = imagesData.backdrops[0].file_path;
                }
              } catch (error) {
                console.warn(`Could not fetch images for ${type.toLowerCase()} ${id}:`, error);
              }
            }

            return {
              type,
              id,
              title: title || name || "",
              poster_path,
              overview,
              backdrop_path: finalBackdrop,
            };
          })
        );

        return {
          genre: genre.name,
          media: mediaWithBackdrop,
        };
      })
    );

    return mediaByGenre;
  } catch (error) {
    console.error(`Error fetching ${type.toLowerCase()} by genre:`, error);
    return [];
  }
};

export const getDetails = async (id: string, type: typeof DATA_TYPE.MOVIE | typeof DATA_TYPE.SERIES): Promise<MediaInformation> => {
  const endpoint = type === DATA_TYPE.MOVIE ? `${URLS_API.MOVIE_DETAIL}/${id}` : `${URLS_API.SERIES_DETAIL}/${id}`;

  const { data } = await api.get<MediaInformation>(endpoint);

  const parsedData: MediaInformation = {
    ...data,
    type,
    title: data.title || (data as MediaInformation).name || "",
    release_date: data.release_date ?? (data as MediaInformation).first_air_date,
  };
  return parsedData;
};

export const getActorsAndDirector = async (id: string, type: typeof DATA_TYPE.MOVIE | typeof DATA_TYPE.SERIES): Promise<ActorsDirectorProps | null> => {
  const endpoint = type === DATA_TYPE.MOVIE ? `${URLS_API.MOVIE_DETAIL}/${id}${URLS_API.CREDITS}` : `${URLS_API.SERIES_DETAIL}/${id}${URLS_API.CREDITS}`;
  const { data } = await api.get<CreditsResponse>(endpoint);
  if (!data) return null;

  const actors = data.cast?.length && data.cast.length > 0 ? data.cast.slice(0, 6).map((actor) => actor.name) : ["No actors found"];
  const director = data.crew?.find((person) => person.job === "Director")?.name || data.crew?.find((person) => person.job === "Series Director")?.name || "Unknown director";
  return { actors, director };
};
