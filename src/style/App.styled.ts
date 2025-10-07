import styled, { createGlobalStyle } from "styled-components";
import { BRANDING_COLORS } from "../constants/Colors";
import { URL_IMAGES } from "../constants/URLs";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export const GlobalStyleDiv = styled.div`
  height: 1080px;
  width: 1920px;
  font-family: Arial, sans-serif;
  background: linear-gradient(${BRANDING_COLORS.BLACK_TRANSPARENT}, ${BRANDING_COLORS.BLACK_TRANSPARENT}), url(${URL_IMAGES.BACKPICTURE}) right center no-repeat, ${BRANDING_COLORS.BLACK};
  background-size: 60% 100%, 60% 100%;
  background-position: right top, right top;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
