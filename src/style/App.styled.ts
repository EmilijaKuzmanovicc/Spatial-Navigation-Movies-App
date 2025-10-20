import styled, { createGlobalStyle } from "styled-components";
import { BRANDING_COLORS } from "../utils/constants/Colors";
import { URL_IMAGES } from "../utils/constants/URLs";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  line-height: 1.5;
  font-style: normal;
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
    display: none;
  }
}
`;
export const GlobalStyleDiv = styled.div`
  height: 1080px;
  width: 1920px;
  font-family: "Inter", sans-serif;
  background: linear-gradient(${BRANDING_COLORS.BLACK_TRANSPARENT}, ${BRANDING_COLORS.BLACK_TRANSPARENT}), url(${URL_IMAGES.BACKPICTURE}) right center no-repeat, ${BRANDING_COLORS.NIGHT_BLACK};
  background-size: 80% 100%, 80% 100%;
  background-position: right top, right top;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
