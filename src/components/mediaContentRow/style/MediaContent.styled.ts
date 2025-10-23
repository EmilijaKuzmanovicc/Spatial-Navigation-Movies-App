import styled, { css } from "styled-components";
import { BRANDING_COLORS, pop, URL_IMAGES } from "../../../utils";

export const MediaContainer = styled.div`
  width: 100%;
  overflow: auto;
  justify-content: start;
  p {
    font-size: 26px;
    color: ${BRANDING_COLORS.WHITE};
    font-weight: 700;
    padding-left: 50px;
    padding-top: 20px;
    text-shadow: 2px 2px 4px ${BRANDING_COLORS.LIGHT_BLACK};
    letter-spacing: 2px;
    line-height: 1.2;
  }
`;
const focusedStyles = css`
  padding: 5px;
  transform: scale(1.1);
  border-width: 6px;
  border-color: ${BRANDING_COLORS.RED};
  animation: ${pop} 0.3s ease-out;
  cursor: pointer;
`;
export const MediaItemBox = styled.div.attrs<{
  $poster_path: string;
  $sizeH: string;
  $sizeW: string;
}>(({ $poster_path, $sizeH, $sizeW }) => ({
  style: {
    height: $sizeH,
    width: $sizeW,
    backgroundImage: $poster_path.startsWith("/") ? `url(${import.meta.env.VITE_TMDB_IMAGE_URL}${$poster_path})` : `url(${URL_IMAGES.IMAGE_NOT_FOUND})`,
  },
}))<{ $focused: boolean }>`
  margin: 10px;
  padding: 10px;
  background-size: cover;
  background-position: center;
  border-style: solid;
  border-radius: 6px;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  background-color: ${BRANDING_COLORS.GREY};
  transition: all 0.25s ease-in-out;
  border-width: ${({ $focused }) => ($focused ? "6px" : "0px")};
  ${({ $focused }) => $focused && focusedStyles};
`;

export const MediaWrapper = styled.div`
  padding: 20px;
  display: flex;
  transition: transform 0.3s ease;
  gap: 10px;
`;

export const MediaScroll = styled.div`
  padding: 0 20px;
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;
  animation: fadeIn 0.5s ease;
  padding-right: 200px;

  &::-webkit-scrollbar {
    height: 8px;
  }

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

export const MediaCart = styled.div<{ $sizeW: string }>`
  display: flex;
  width: ${({ $sizeW }) => $sizeW + 10};
  flex-direction: column;
  justify-content: center;
  text-align: start;
  align-items: center;
`;

export const TitleStyle = styled.div<{ $focused: boolean; $sizeW: string }>`
  padding-top: 10px;
  font-size: 24px;
  font-weight: 400;
  width: ${({ $sizeW }) => $sizeW};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ $focused }) => ($focused ? `${BRANDING_COLORS.WHITE}` : `${BRANDING_COLORS.GREY}`)};
`;
