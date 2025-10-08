import { useEffect, useState, type FC } from "react";
import { HomePopularContainer } from "../style/Home.styled";
import { getPopularMoviesAndSeries } from "../../api/MovieApi";
import type { Movie, Series } from "../../MovieType";

export function HomePopular() {
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [popularSeries, setPopularSeries] = useState<Series[]>([]);
  const fetchMoviesSeries = async () => {
    const { movies, series } = await getPopularMoviesAndSeries();
    setPopularMovies(movies);
    setPopularSeries(series);
  };
  useEffect(() => {
    fetchMoviesSeries();
  }, []);

  return <HomePopularContainer></HomePopularContainer>;
}
