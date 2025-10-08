import { URL_IMAGES } from "../../../constants/URLs";
import { LogoContainer, LogoName, LogoDescription } from "../style/Logo.styled";

export function Logo() {
  return (
    <LogoContainer>
      <LogoName src={URL_IMAGES.SHINDIRI_STURDIO_LOGO}></LogoName>
      <LogoDescription src={URL_IMAGES.LOGO_DESCRIPTION}></LogoDescription>
    </LogoContainer>
  );
}
