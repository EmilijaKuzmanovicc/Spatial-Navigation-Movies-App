import { NavbarStyle } from "./style/Logo.styled";
import { NavbarItems } from "./constants/NavbarItems";
import { Logo } from "./components/Logo";

export function Navbar() {
  return (
    <NavbarStyle>
      <Logo />
      <div style={{ display: "flex", gap: "100px", marginLeft: "50px", color: "white" }}>
        {NavbarItems.map((item) => (
          <h2 key={item.id}>{item.name}</h2>
        ))}
      </div>
    </NavbarStyle>
  );
}
