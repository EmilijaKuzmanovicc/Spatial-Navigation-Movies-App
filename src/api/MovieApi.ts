import { URLS_API } from "../constants/URLs";
import type { Genre, Movie, PaginatedResponse, Series } from "../MovieType";
import { api } from "./Axios";

export const getPopularMoviesAndSeries = async () => {
  const { data: moviesData } = await api.get<PaginatedResponse<Movie>>(URLS_API.GET_MOVIES);
  const { data: seriesData } = await api.get<PaginatedResponse<Series>>(URLS_API.GET_SERIES);

  return {
    movies: moviesData.results.slice(0, 5).map(({ id, title, poster_path }: Movie) => ({
      id,
      title,
      poster_path,
    })),
    series: seriesData.results.slice(0, 5).map(({ id, name, poster_path }: Series) => ({
      id,
      name,
      poster_path,
    })),
  };
};

export const getGenresWithMovies = async () => {
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
