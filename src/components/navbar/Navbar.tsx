import { ItemsContainer, NavbarItemStyle, NavbarStyle } from "./style/Logo.styled";

import { Logo } from "./components/Logo";
import { useEffect, useState } from "react";
import { NavbarItems } from "./constants/NavbarItems";
import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { NavbarProps } from "../../home/Types/HomeTypes";
import { ITEMS_NAME } from "../../constants/URLs";

export function Navbar({ onSelect }: NavbarProps) {
  const [selectedItem, setSelectedItem] = useState<string>(NavbarItems[0].name);

  useEffect(() => {
    setFocus(ITEMS_NAME.NAVBAR);
  }, [onSelect]);

  return (
    <NavbarStyle>
      <Logo />
      <ItemsContainer>
        {NavbarItems.map((item) => {
          const { ref: itemRef, focused } = useFocusable({
            onEnterPress: () => {
              onSelect(item.name);
            },
            onFocus: () => {
              setSelectedItem(item.name);
            },

            onArrowPress: (direction) => {
              return direction === "up" ? false : true;
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
