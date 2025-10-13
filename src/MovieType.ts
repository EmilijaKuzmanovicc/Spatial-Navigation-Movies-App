import type { FocusableComponentLayout, FocusDetails } from "@noriginmedia/norigin-spatial-navigation";

export interface PaginatedResponse<T> {
  results: T[];
}
export interface Movie {
  type: string;
  id: number;
  title: string;
  poster_path?: string;
  overview?: string;
}
export interface Series {
  type: string;
  id: number;
  name: string;
  poster_path?: string;
  overview?: string;
}

export interface Genre {
  id: number;
  name: string;
}

export type UnifiedMedia = {
  type: string;
  id: number;
  title: string;
  poster_path?: string;
  overview?: string;
};
export function mapMovieToUnified(movie: Movie): UnifiedMedia {
  return {
    type: movie.type,
    id: movie.id,
    title: movie.title,
    poster_path: movie.poster_path,
    overview: movie.overview,
  };
}

export function mapSeriesToUnified(series: Series): UnifiedMedia {
  return {
    type: series.type,
    id: series.id,
    title: series.name,
    poster_path: series.poster_path,
    overview: series.overview,
  };
}
export interface MediaProps<T extends UnifiedMedia> {
  focusKey?: string;
  title: string;
  items: T[];
  onFocus: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void;
}
export interface MediaItemProp {
  type: string;
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  focusKey: string;
  onFocus: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void;
}

export interface MediaSection {
  name: string;
  items: UnifiedMedia[];
}

export type DataMedia = MediaSection[];
export interface FocusKeyProps {
  focusKey: string;
}

export interface HomeProp {
  title?: string;

  onFocus: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void;
}

export interface GenresWithMoviesProps {
  genre: string;
  movies: Movie[];
}
