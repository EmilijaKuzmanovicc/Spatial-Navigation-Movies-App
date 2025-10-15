import { ItemsContainer, NavbarItemStyle, NavbarStyle } from "./style/Logo.styled";
import { Logo } from "./components/Logo";
import { useState } from "react";
import { NavbarItems } from "./constants/NavbarItems";
import { useFocusable } from "@noriginmedia/norigin-spatial-navigation";
import { ITEMS_NAME, PATHS } from "../../constants/URLs";
import { useLocation, useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialSelected = Object.entries(PATHS).find(([_, path]) => path === location.pathname)?.[0] as string | undefined;
  const [selectedItem, setSelectedItem] = useState<string>(initialSelected || PATHS.HOME);

  const [focusedItem, setFocusedItem] = useState<string>();
  const handleClick = () => {
    navigate(`/${selectedItem}`);
  };
  return (
    <NavbarStyle>
      <Logo />
      <ItemsContainer>
        {NavbarItems.map((item, index) => {
          const { ref: itemRef, focused } = useFocusable({
            focusable: true,
            trackChildren: true,
            saveLastFocusedChild: true,
            autoRestoreFocus: true,

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
            onArrowPress: (direction, event) => {
              if (direction === "left" && index === 0) return false;
              if (direction === "right" && index === NavbarItems.length - 1) return false;
              return true;
            },
            onFocus: () => {
              setFocusedItem(item.name);
            },
          });
          return (
            <NavbarItemStyle ref={itemRef} key={item.id} $focused={focused ? focusedItem === item.name : false} $selected={selectedItem === item.name} onClick={handleClick}>
              {item.name}
            </NavbarItemStyle>
          );
        })}
      </ItemsContainer>
    </NavbarStyle>
  );
}
