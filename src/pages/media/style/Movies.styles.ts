import styled from "styled-components";
import { BRANDING_COLORS } from "../../../utils";

export const MoviesContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  flex-direction: column;
  z-index: 1;
`;

export const DetailPosterPicture = styled.div.attrs<{ $picture?: string }>((props) => ({
  style: {
    backgroundImage: props.$picture ? `url(${import.meta.env.VITE_TMDB_IMAGE_URL}${props.$picture})` : undefined,
  },
}))`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 0;
  pointer-events: none;

  &::after {
    content: "";
    position: fixed;
    inset: 0;
    background-color: ${BRANDING_COLORS.BLACK_TRANSPARENT};
    pointer-events: none;
  }
`;
