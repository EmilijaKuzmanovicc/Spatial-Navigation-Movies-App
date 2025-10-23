import type { Genre, UnifiedMedia } from "..";
import type { DATA_TYPE } from "../../../utils";
export interface Creator {
  id: number;
  credit_id: string;
  name: string;
  gender: number | null;
  profile_path: string | null;
}

export interface Season {
  id: number;
  name: string;
  overview: string;
  air_date: string | null;
  episode_count: number;
  poster_path: string | null;
  season_number: number;
}
export interface MediaInformation {
  type: typeof DATA_TYPE.MOVIE | typeof DATA_TYPE.SERIES;
  id: string;
  adult: boolean;
  title: string;
  overview: string;
  name?: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
  first_air_date?: string;
  last_air_date?: string;
  genres: Genre[];
  origin_country: string[];
  original_language: string;
  homepage: string | null;
  status: string;
  number_of_seasons?: number;
  number_of_episodes?: number;
  vote_average: number;
  vote_count: number;
  tagline: string | null;
  popularity?: number;
  created_by?: Creator[];
  seasons?: Season[];
  imdb_id?: string | null;
  revenue?: number;
  runtime?: number | null;
  video?: boolean;
}
export interface Series extends Omit<UnifiedMedia, "title"> {
  type: typeof DATA_TYPE.MOVIE;
  name: string;
}
