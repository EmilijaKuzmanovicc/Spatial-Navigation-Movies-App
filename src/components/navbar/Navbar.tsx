import type { FC } from "react";
import Logo from "./components/Logo";
import { NavbarStyle } from "./style/Logo.styled";
import { NavbarItems } from "./constants/NavbarItems";

const Navbar: FC = () => {
  return (
    <NavbarStyle>
      <Logo />
      <div style={{ display: "flex", gap: "20px", color: "white", paddingRight: "50px" }}>
        {NavbarItems.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
      </div>
    </NavbarStyle>
  );
};
export default Navbar;
