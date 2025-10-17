import { useEffect } from "react";
import { NavbarItemStyle } from "../style/Logo.styled";
import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { useNavigate } from "react-router-dom";
import type { NavbarItemComponentProps } from "../NavbarType";
import { ITEMS_NAME, PATHS } from "../../../constants/URLs";

export function NavbarItemComponent({ item, selectedItem, setSelectedItem, initialSelected }: NavbarItemComponentProps) {
  const navigate = useNavigate();
  const { ref, focusSelf, focused } = useFocusable({
    focusable: true,
    focusKey: item.name,
    onEnterPress: () => {
      switch (item.name) {
        case ITEMS_NAME.HOME:
          navigate(PATHS.HOME);
          break;
        case ITEMS_NAME.MOVIES:
          navigate(PATHS.MOVIES);
          break;
        case ITEMS_NAME.SERIES:
          navigate(PATHS.SERIES);
          break;
      }
      setSelectedItem(item.name);
    },
  });

  useEffect(() => {
    setFocus(initialSelected);
  }, [initialSelected]);

  return (
    <NavbarItemStyle
      ref={ref}
      key={item.id}
      $focused={focused}
      $selected={selectedItem === item.name}
      onClick={() => {
        setSelectedItem(item.name);
        focusSelf();
        navigate(item.path);
      }}
    >
      {item.name}
    </NavbarItemStyle>
  );
}
