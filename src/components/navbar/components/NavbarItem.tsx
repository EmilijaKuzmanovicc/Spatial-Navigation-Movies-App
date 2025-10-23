import { useFocusable, setFocus } from "@noriginmedia/norigin-spatial-navigation";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PATH_MAP, hoverToFocus } from "../../../utils";
import type { NavbarItemComponentProps } from "../types/NavbarType";
import { NavbarItemStyle } from "../style/Logo.styled";

export function NavbarItemComponent({ item, selectedItem, setSelectedItem, initialSelected }: NavbarItemComponentProps) {
  const navigate = useNavigate();
  const { ref, focusSelf, focused, focusKey } = useFocusable({
    focusable: true,
    focusKey: item.name,
    onEnterPress: () => {
      const path = PATH_MAP[item.name];
      if (path) navigate(path);
      setSelectedItem(item.name);
    },
  });

  useEffect(() => {
    setFocus(initialSelected);
  }, [initialSelected]);
  const handleMouseEnter = hoverToFocus(focusKey, () => focused);

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
      onMouseEnter={handleMouseEnter}
    >
      {item.name}
    </NavbarItemStyle>
  );
}
