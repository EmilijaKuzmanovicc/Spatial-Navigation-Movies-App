import styled from "styled-components";
import { BRANDING_COLORS } from "../../../utils";

export const MediaDetailContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  z-index: 1;
`;

export const BackButton = styled.button<{ $focused: boolean }>`
  margin-top: 70px;
  margin-left: 75px;
  width: 112px;
  height: 64px;
  background-color: ${({ $focused }) => ($focused ? `${BRANDING_COLORS.RED}` : `${BRANDING_COLORS.BACK_BUTTON}`)};
  border-radius: 300px;
  border: 0;
  justify-content: center;
  text-align: center;
  align-items: center;
  img {
    height: 48px;
    width: 48px;
  }
`;

export const MediaDetailsStyle = styled.div`
  color: ${BRANDING_COLORS.WHITE};
  margin-left: 75px;
  margin-top: 40px;
  width: 1084px;
  height: 592px;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const TextMovieStyle = styled.div`
  font-weight: 400;
  font-size: 20px;
  font-style: normal;
  line-height: 29px;
`;

export const GenreStyle = styled.div`
  display: flex;
`;

export const MediaInformationBody = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 1084px;
  margin-top: 20px;
`;

export const PosterPath = styled.div.attrs<{ $backgroundColor: string }>(({ $backgroundColor }) => ({
  style: {
    backgroundImage: `url(${import.meta.env.VITE_TMDB_IMAGE_URL}${$backgroundColor})`,
  },
}))`
  width: 325px;
  height: 485px;
  background-position: center;
  background-size: cover;
`;
export const BodyInformationsStyle = styled.div`
  margin-left: 60px;
  display: flex;
  width: 700px;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  align-items: start;
  gap: 20px;
  font-weight: 600;
  font-style: normal;
  line-height: 31px;
  h2 {
    font-size: 28px;
    font-weight: bold;
  }
  h4 {
    height: 140px;
    font-size: 22px;
    line-height: 31px;
    font-weight: lighter;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-top: 10px;
    margin-bottom: 20px;
  }
  h5 {
    font-weight: 400;
    font-size: 22px;
  }
  a {
  }
`;
export const HeaderInformations = styled.div`
  height: 90px;
  font-weight: 400;
  font-size: 20px;
  font-style: normal;
  line-height: 29px;
`;
export const MediaListContainer = styled.div`
  width: 100%;
  height: 555px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const MediaListScroll = styled.div`
  overflow: auto;
  flex-shrink: 1;
  -ms-overflow-style: none;

  animation: fadeIn 0.5s ease;

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

export const MediaShortInformationStyle = styled.div`
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
