import { PATHS, URLS_API } from "../constants/URLs";
import type { Genre, GenresWithMediaProps, MediaSection, Movie, PaginatedResponse, Series, UnifiedMedia } from "../MovieType";
import type { ActorsDirectorProps, CreditsResponse } from "../pages/mediaDetails/types/MediaInformationType";
import type { MediaInformation } from "../pages/mediaDetails/types/SeriesInformationType";
import { api } from "./Axios";
export const getPopularMoviesAndSeries = async (): Promise<MediaSection[]> => {
  const { data: moviesData } = await api.get<PaginatedResponse<Movie>>(URLS_API.GET_MOVIES);
  const { data: seriesData } = await api.get<PaginatedResponse<Series>>(URLS_API.GET_SERIES);

  const dataMedia: MediaSection[] = [
    {
      name: "MOVIES",
      items: moviesData.results.slice(0, 5).map(({ id, title, poster_path, overview }) => ({
        type: "movie",
        id,
        title,
        poster_path,
        overview,
      })),
    },
    {
      name: "SERIES",
      items: seriesData.results.slice(0, 5).map(({ id, name, poster_path, overview }) => ({
        type: "series",
        id,
        title: name,
        poster_path,
        overview,
      })),
    },
  ];
  return dataMedia;
};
export const getGenresWithMovies = async (): Promise<GenresWithMediaProps[]> => {
  try {
    const { data: genresData } = await api.get<{ genres: Genre[] }>(URLS_API.GET_MOVIE_GENRES_LIST);
    const genres: Genre[] = genresData.genres;

    const addedMovieIds = new Set<number>();

    const moviesByGenre = await Promise.all(
      genres.map(async (genre: Genre) => {
        const uniqueMovies: UnifiedMedia[] = [];
        let page = 1;

        while (uniqueMovies.length < 10) {
          const { data: moviesData } = await api.get<PaginatedResponse<UnifiedMedia>>(URLS_API.GET_MOVIES_BY_GENRES, {
            params: { with_genres: genre.id, page },
          });

          if (!moviesData.results || moviesData.results.length === 0) break;

          for (const movie of moviesData.results) {
            if (uniqueMovies.length >= 10) break;
            if (!addedMovieIds.has(movie.id)) {
              uniqueMovies.push(movie);
              addedMovieIds.add(movie.id);
            }
          }

          page++;
        }

        return {
          genre: genre.name,
          media: uniqueMovies.map(({ id, title, poster_path, overview, backdrop_path }) => ({
            type: "movie" as const,
            id,
            title: title || "Untitled",
            poster_path,
            overview,
            backdrop_path,
          })),
        };
      })
    );

    return moviesByGenre;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getGenresWithSeries = async (): Promise<GenresWithMediaProps[]> => {
  try {
    const { data: genresData } = await api.get<{ genres: Genre[] }>(URLS_API.GET_SERIES_GENRES_LIST);
    const genres: Genre[] = genresData.genres;

    const addedSeriesIds = new Set<number>();

    const seriesByGenre = await Promise.all(
      genres.map(async (genre: Genre) => {
        const uniqueSeries: UnifiedMedia[] = [];
        let page = 1;

        while (uniqueSeries.length < 10) {
          const { data: seriesData } = await api.get<PaginatedResponse<UnifiedMedia>>(URLS_API.GET_SERIES_BY_GENRES, {
            params: { with_genres: genre.id, page },
          });

          if (!seriesData.results || seriesData.results.length === 0) break;

          for (const series of seriesData.results) {
            if (uniqueSeries.length >= 10) break;
            if (!addedSeriesIds.has(series.id)) {
              uniqueSeries.push(series);
              addedSeriesIds.add(series.id);
            }
          }

          page++;
        }

        const mediaWithBackdrop = await Promise.all(
          uniqueSeries.map(async ({ id, title, name, poster_path, overview, backdrop_path }) => {
            if (!backdrop_path) {
              try {
                const { data: imagesData } = await api.get<{ backdrops: { file_path: string }[] }>(`${URLS_API.SERIES_DETAIL}/${id}/images`);
                if (imagesData.backdrops && imagesData.backdrops.length > 0) {
                  backdrop_path = imagesData.backdrops[0].file_path;
                }
              } catch (error) {
                console.warn(`Could not fetch images for series ${id}:`, error);
              }
            }

            return {
              type: "series" as const,
              id,
              title: title || name || "Untitled",
              poster_path,
              overview,
              backdrop_path,
            };
          })
        );

        return {
          genre: genre.name,
          media: mediaWithBackdrop,
        };
      })
    );

    return seriesByGenre;
  } catch (error) {
    console.error("Error fetching series by genre:", error);
    return [];
  }
};

export const getDetails = async (id: string, type: "movie" | "series"): Promise<MediaInformation> => {
  const endpoint = type === PATHS.MOVIE_TYPE ? `${URLS_API.MOVIE_DETAIL}/${id}` : `${URLS_API.SERIES_DETAIL}/${id}`;

  const { data } = await api.get<MediaInformation>(endpoint);

  const parsedData: MediaInformation = {
    ...data,
    type,
    title: data.title || (data as any).name,
    release_date: data.release_date ?? (data as any).first_air_date,
  };
  return parsedData;
};

export const getActorsAndDirector = async (id: string, type: "movie" | "series"): Promise<ActorsDirectorProps | null> => {
  const endpoint = type === "movie" ? `${URLS_API.MOVIE_DETAIL}/${id}${URLS_API.CREDITS}` : `${URLS_API.SERIES_DETAIL}/${id}${URLS_API.CREDITS}`;
  const { data } = await api.get<CreditsResponse>(endpoint);
  if (!data) return null;

  const actors = data.cast?.length && data.cast.length > 0 ? data.cast.slice(0, 6).map((actor) => actor.name) : ["No actors found"];
  const director = data.crew?.find((person) => person.job === "Director")?.name || data.crew?.find((person) => person.job === "Series Director")?.name || "Unknown director";
  return { actors, director };
};
