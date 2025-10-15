import type { FocusableComponentLayout, FocusDetails } from "@noriginmedia/norigin-spatial-navigation";

export interface PaginatedResponse<T> {
  results: T[];
}

export interface Genre {
  id: number;
  name: string;
}

export type UnifiedMedia = {
  type: "movie" | "series";
  id: number;
  title: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
};

export interface Movie extends UnifiedMedia {
  type: "movie";
}

export interface Series extends Omit<UnifiedMedia, "title"> {
  type: "series";
  name: string;
}
export interface MediaProps<T extends UnifiedMedia> {
  sizeW: string;
  sizeH: string;
  focusKey?: string;
  title: string;
  items: T[];
  onFocus: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void;
  onMediaFocus?: (movie: UnifiedMedia) => void;
}
export interface MediaItemProp {
  sizeW: string;
  sizeH: string;
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
