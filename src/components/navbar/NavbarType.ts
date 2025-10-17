export interface NavbarItemComponentProps {
  item: { id: string; name: string; path: string };
  index: number;
  selectedItem: string | undefined;
  setSelectedItem: (name: string) => void;
  initialSelected: string;
}
