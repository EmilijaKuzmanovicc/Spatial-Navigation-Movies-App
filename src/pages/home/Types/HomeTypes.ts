import type { FocusableComponentLayout, FocusDetails } from "@noriginmedia/norigin-spatial-navigation";
import type { Dispatch, SetStateAction } from "react";

export interface ChannelsProps {
  channel: ChannelsType;
  focusKey: string;
  onFocus: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void;
}

export interface ChannelsType {
  name: string;
  image: string;
}

export interface ChannelItemProp {
  name: string;
  image: string;
  focusKey: string;
  onFocus: (layout: FocusableComponentLayout, props: object, details: FocusDetails) => void;
}
export type NavbarProps = {
  onSelect: Dispatch<SetStateAction<string>>;
  activeItem: string;
};
