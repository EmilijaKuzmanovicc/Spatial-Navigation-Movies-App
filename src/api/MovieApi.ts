import { PATHS, URLS_API } from "../constants/URLs";
import type { Genre, GenresWithMoviesProps, MediaSection, Movie, PaginatedResponse, Series } from "../MovieType";
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

export const getGenresWithMovies = async (): Promise<GenresWithMoviesProps[]> => {
  try {
    const { data: genresData } = await api.get<{ genres: Genre[] }>(URLS_API.GET_MOVIE_GENRES_LIST);
    const genres: Genre[] = genresData.genres;

    const addedMovieIds = new Set<number>();

    const moviesByGenre = await Promise.all(
      genres.map(async (genre: Genre) => {
        let uniqueMovies: Movie[] = [];
        let page = 1;

        while (uniqueMovies.length < 10) {
          const { data: moviesData } = await api.get<PaginatedResponse<Movie>>(URLS_API.GET_MOVIES_BY_GENRES, {
            params: {
              with_genres: genre.id,
              page,
            },
          });
          const filtered = moviesData.results.filter(({ id }) => !addedMovieIds.has(id));
          uniqueMovies.push(...filtered);

          if (moviesData.results.length === 0) break;
          page++;
        }

        uniqueMovies = uniqueMovies.slice(0, 10);

        uniqueMovies.forEach(({ id }) => addedMovieIds.add(id));

        return {
          genre: genre.name,
          movies: uniqueMovies.map(({ id, title, poster_path, overview, backdrop_path }) => ({
            type: "movie" as const,
            id,
            title,
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

export const getGenresWithSeries = async () => {
  try {
    const { data: genresData } = await api.get<{ genres: Genre[] }>(URLS_API.GET_SERIES_GENRES_LIST);
    const genres: Genre[] = genresData.genres;
    const addedSeriesIds = new Set<number>();
    const seriesByGenre = await Promise.all(
      genres.map(async (genre: Genre) => {
        let uniqueSeries: Series[] = [];
        let page = 1;

        while (uniqueSeries.length < 10) {
          const { data: seriesData } = await api.get<PaginatedResponse<Series>>(URLS_API.GET_SERIES_BY_GENRES, {
            params: {
              with_genres: genre.id,
              page,
            },
          });
          const filtered = seriesData.results.filter(({ id }) => !addedSeriesIds.has(id));
          uniqueSeries.push(...filtered);
          if (seriesData.results.length === 0) break;
          page++;
        }
        uniqueSeries = uniqueSeries.slice(0, 10);
        uniqueSeries.forEach(({ id }) => addedSeriesIds.add(id));

        return {
          genre: genre.name,
          series: uniqueSeries.map(({ id, name, poster_path, overview, backdrop_path }) => ({
            type: "series" as const,
            id,
            name,
            poster_path,
            overview,
            backdrop_path,
          })),
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
