import { PATHS, URLS_API } from "../constants/URLs";
import type { DataMedia, Genre, GenresWithMoviesProps, Movie, PaginatedResponse, Series, UnifiedMedia } from "../MovieType";
import { api } from "./Axios";
import type { ActorsDirectorProps, CreditsResponse } from "./movieDetails/types/MediaInformationType";

export const getPopularMoviesAndSeries = async (): Promise<DataMedia> => {
  const { data: moviesData } = await api.get<PaginatedResponse<Movie>>(URLS_API.GET_MOVIES);
  const { data: seriesData } = await api.get<PaginatedResponse<Series>>(URLS_API.GET_SERIES);

  const movies: UnifiedMedia[] = moviesData.results.slice(0, 5).map(({ id, title, poster_path, overview }) => ({
    type: "movie",
    id,
    title,
    poster_path,
    overview,
  }));

  const series: UnifiedMedia[] = seriesData.results.slice(0, 5).map(({ id, name, poster_path, overview }) => ({
    type: "series",
    id,
    title: name,
    poster_path,
    overview,
  }));

  const dataMedia: DataMedia = [
    { name: "MOVIES", items: movies },
    { name: "SERIES", items: series },
  ];

  return dataMedia;
};

export const getGenresWithMovies = async (): Promise<GenresWithMoviesProps[]> => {
  try {
    const { data: genresData } = await api.get<{ genres: Genre[] }>(URLS_API.GET_MOVIE_GENRES_LIST);
    const genres: Genre[] = genresData.genres;

    const moviesByGenre = await Promise.all(
      genres.map(async (genre: Genre) => {
        const { data: moviesData } = await api.get<PaginatedResponse<Movie>>(URLS_API.GET_MOVIES_BY_GENRES, {
          params: {
            with_genres: genre.id,
            page: 1,
          },
        });

        return {
          genre: genre.name,
          movies: moviesData.results.slice(0, 10).map(({ id, title, poster_path, overview }: Movie) => ({
            type: "movie",
            id,
            title,
            poster_path,
            overview,
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

    const seriesByGenre = await Promise.all(
      genres.map(async (genre: Genre) => {
        const { data: seriesData } = await api.get<PaginatedResponse<Series>>(URLS_API.GET_SERIES_BY_GENRES, {
          params: {
            with_genres: genre.id,
            page: 1,
          },
        });

        return {
          genre: genre.name,
          series: seriesData.results.slice(0, 10).map(({ id, name, poster_path, overview }: Series) => ({
            id,
            name,
            poster_path,
            overview,
          })),
        };
      })
    );

    return seriesByGenre;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const getDetails = async <T>(id: string, type: string): Promise<T> => {
  const endpoint = type === PATHS.MOVIE_TYPE ? `${URLS_API.MOVIE_DITAIL}/${id}` : `${URLS_API.SERIES_DITAIL}/${id}`;
  const { data } = await api.get<T>(endpoint);
  return data;
};

export const getActorsAndDirector = async (id: string, type: string): Promise<ActorsDirectorProps | null> => {
  const endpoint = type === "movie" ? `${URLS_API.MOVIE_DITAIL}/${id}${URLS_API.CREDITS}` : `${URLS_API.SERIES_DITAIL}/${id}${URLS_API.CREDITS}`;
  const { data } = await api.get<CreditsResponse>(endpoint);
  if (!data) return null;

  const actors = data.cast?.length && data.cast.length > 0 ? data.cast.slice(0, 6).map((actor) => actor.name) : ["No actors found"];
  const director = data.crew?.find((person) => person.job === "Director")?.name || data.crew?.find((person) => person.job === "Series Director")?.name || "Unknown director";
  return { actors, director };
};
