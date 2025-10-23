import type { FocusableComponentLayout, FocusDetails } from "@noriginmedia/norigin-spatial-navigation";
import type { DATA_TYPE } from "../../../utils";
import type { MediaInformation } from "./SeriesInformationType";
export interface MovieDetailsProp {
  id: string;
  type: typeof DATA_TYPE.MOVIE | typeof DATA_TYPE.SERIES;
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
  media: MediaInformation;
  type: typeof DATA_TYPE.MOVIE | typeof DATA_TYPE.SERIES;
}

export interface ActorsDirectorProps {
  actors: string[];
  director: string;
}

export interface MediaProps<T extends UnifiedMedia> {
  genre?: string;
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
export interface GenresWithMediaProps {
  genre: string;
  media: UnifiedMedia[];
}
export interface PaginatedResponse<T> {
  results: T[];
}

export type UnifiedMedia = {
  type: string;
  id: number;
  title: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  overview?: string;
};
export interface FocusKeyProps {
  focusKey: string;
  onMouseFocus?: (focusKey: string) => void;
}
