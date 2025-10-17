import { ItemsContainer, NavbarStyle } from "./style/Logo.styled";
import { Logo } from "./components/Logo";
import { useState } from "react";
import { NavbarItems } from "./constants/NavbarItems";
import { FocusContext, useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { PATHS } from "../../constants/URLs";
import { useLocation } from "react-router-dom";
import type { FocusKeyProps } from "../../MovieType";
import { NavbarItemComponent } from "./components/NavbarItem";

export function Navbar({ focusKey: focusKeyParam }: FocusKeyProps) {
  const location = useLocation();
  const currentSelected = Object.entries(PATHS).find(([_, path]) => path === location.pathname)?.[0];
  const [selectedItem, setSelectedItem] = useState<string | undefined>(currentSelected);

  const { ref, focusKey } = useFocusable({
    focusable: true,
    focusKey: focusKeyParam,
    saveLastFocusedChild: false,
    preferredChildFocusKey: selectedItem,
  });

  return (
    <NavbarStyle>
      <Logo />
      <FocusContext.Provider value={focusKey}>
        <ItemsContainer ref={ref}>
          {NavbarItems.map((item, index) => (
            <NavbarItemComponent key={item.id} item={item} index={index} selectedItem={selectedItem} setSelectedItem={setSelectedItem} initialSelected={selectedItem!} />
          ))}
        </ItemsContainer>
      </FocusContext.Provider>
    </NavbarStyle>
  );
}
