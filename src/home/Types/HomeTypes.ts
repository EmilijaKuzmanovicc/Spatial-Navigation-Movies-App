import type { FocusableComponentLayout, FocusDetails } from "@noriginmedia/norigin-spatial-navigation";

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
  onSelect: React.Dispatch<React.SetStateAction<string>>;
};
