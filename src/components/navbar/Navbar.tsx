import { ItemsContainer, NavbarItemStyle, NavbarStyle } from "./style/Logo.styled";

import { Logo } from "./components/Logo";
import { useEffect, useState } from "react";
import { NavbarItems } from "./constants/NavbarItems";
import { setFocus, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import type { NavbarProps } from "../../home/Types/HomeTypes";

export function Navbar({ onSelect }: NavbarProps) {
  const [selectedItem, setSelectedItem] = useState(NavbarItems[0].name);

  useEffect(() => {
    setFocus("NAVBAR");
  }, [onSelect]);

  return (
    <NavbarStyle>
      <Logo />
      <ItemsContainer>
        {NavbarItems.map((item) => {
          const { ref: itemRef, focused } = useFocusable({
            onFocus: () => {
              setSelectedItem(item.name);
              onSelect(item.name);
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
