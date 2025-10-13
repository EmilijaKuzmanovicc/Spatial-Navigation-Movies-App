import { ItemsContainer, NavbarItemStyle, NavbarStyle } from "./style/Logo.styled";

import { Logo } from "./components/Logo";
import { useEffect, useState } from "react";
import { NavbarItems } from "./constants/NavbarItems";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ITEMS_NAME, PATHS } from "../../constants/URLs";
import { useNavigate } from "react-router-dom";
import type { NavbarProps } from "../../pages/home/Types/HomeTypes";

export function Navbar({ onSelect, activeItem }: NavbarProps) {
  const [selectedItem, setSelectedItem] = useState<string>(activeItem);
  const navigate = useNavigate();
  useEffect(() => {
    setSelectedItem(activeItem);
  }, [onSelect]);
  return (
    <NavbarStyle>
      <Logo />
      <ItemsContainer>
        {NavbarItems.map((item) => {
          const { ref: itemRef, focused } = useFocusable({
            saveLastFocusedChild: true,
            focusable: true,
            trackChildren: true,
            onEnterPress: () => {
              onSelect(item.name);
              if (item.name === ITEMS_NAME.HOME) navigate(PATHS.HOME);
              else if (item.name === ITEMS_NAME.MOVIES) navigate(PATHS.MOVIES);
              else if (item.name === ITEMS_NAME.SERIES) navigate(PATHS.SERIES);
              setSelectedItem(item.name);
            },
            onFocus: () => {},

            onArrowPress: (direction) => {
              if (direction === "up") return false;
              if (NavbarItems[0].name === selectedItem && direction === "left") return false;
              return true;
            },
          });

          return (
            <NavbarItemStyle ref={itemRef} key={item.id} $focused={focused} $selected={selectedItem === item.name}>
              {item.name}
            </NavbarItemStyle>
          );
        })}
      </ItemsContainer>
    </NavbarStyle>
  );
}
