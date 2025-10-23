import type { FocusableComponentLayout, FocusDetails } from "@noriginmedia/norigin-spatial-navigation";
import type { DATA_TYPE } from "../../../utils/constants/Constants";
import type { UnifiedMedia } from "../../mediaDetails/types/MediaInformationType";

export interface Movie extends UnifiedMedia {
  type: typeof DATA_TYPE.MOVIE;
}

export interface HomeProp {
  title?: string;
  onFocus: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void;
}

export interface ScrollToProps {
  x?: number;
  y?: number;
}
export interface ShortInfomation {
  title: string;
  overview: string;
}

export interface MediaProp {
  type: typeof DATA_TYPE.MOVIE | typeof DATA_TYPE.SERIES;
}
