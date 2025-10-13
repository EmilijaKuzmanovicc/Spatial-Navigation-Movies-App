import type { SeriesInformation } from "./SeriesInformationType";

export interface MovieDetailsProp {
  id: string;
  type: string;
}
export interface MovieInformation {
  id: string;
  adult: boolean;
  backdrop_path: string | null;
  genres: Genre[];
  homepage: string | null;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number | null;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Person {
  id: number;
  name: string;
  character: string;
  original_name: string;
  department: string;
  job: string;
  profile_path: string | null;
}

export interface CreditsResponse {
  id: number;
  cast: Person[] | null;
  crew: Person[] | null;
}

export interface GenreProps {
  genres: Genre[];
}

export interface MediaInformationProps {
  movie: MovieInformation | SeriesInformation;
  type: string;
}

export interface ActorsDirectorProps {
  actors: string[];
  director: string;
}
