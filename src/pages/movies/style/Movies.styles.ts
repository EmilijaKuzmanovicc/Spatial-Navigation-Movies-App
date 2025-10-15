import styled from "styled-components";
import { BRANDING_COLORS } from "../../../constants/Colors";

export const MediaListContainer = styled.div`
  width: 100%;
  height: 555px;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
`;

export const MediaListWraper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const MediaListScroll = styled.div`
  overflow-y: hidden;
  flex-shrink: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;
  animation: fadeIn 0.5s ease;
  overflow-x: auto;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const MediaShortInformation = styled.div`
  height: 400px;
  width: 100%;
  padding-left: 70px;
  color: ${BRANDING_COLORS.WHITE};
  font-weight: 600;
  font-style: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
  h1 {
    font-size: 28px;
    margin-bottom: 20px;
  }
  h3 {
    height: 170px;
    font-size: 22px;
    width: 700px;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

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
    background-color: rgba(0, 0, 0, 0.83);
    pointer-events: none;
  }
`;
