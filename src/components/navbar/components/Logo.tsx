import { URL_IMAGES } from "../../../utils";
import { LogoContainer, LogoName } from "../style/Logo.styled";

export function Logo() {
  return (
    <LogoContainer>
      <LogoName src={URL_IMAGES.LOGO}></LogoName>
    </LogoContainer>
  );
}
