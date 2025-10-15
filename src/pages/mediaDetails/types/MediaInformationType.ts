import type { MediaInformation } from "./SeriesInformationType";

export interface MovieDetailsProp {
  id: string;
  type: "movie" | "series";
  setBackdrop?: (value: string) => void;
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
  movie: MediaInformation;
  type: "movie" | "series";
}

export interface ActorsDirectorProps {
  actors: string[];
  director: string;
}
