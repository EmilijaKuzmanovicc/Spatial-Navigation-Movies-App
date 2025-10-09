import styled, { css } from "styled-components";
import { pop } from "../../../constants/Pop";
import { BRANDING_COLORS } from "../../../constants/Colors";

export const MediaContainer = styled.div`
  width: 100%;
  overflow: auto;
  justify-content: start;
  p {
    margin: 0;
    font-size: 26px;
    color: ${BRANDING_COLORS.WHITE};
    font-weight: 700;
    margin-left: 20px;
    margin-top: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    letter-spacing: 2px;
    line-height: 1.2;
  }
`;

export const MediaItemBox = styled.div<{ $focused: boolean; $poster_path: string }>`
  margin: 10px;
  padding: 10px;
  width: 230px;
  height: 300px;
  background-image: url(${({ $poster_path }) => `${import.meta.env.VITE_TMDB_IMAGE_URL}${$poster_path}`});
  background-size: cover;
  background-position: center;
  border-color: ${BRANDING_COLORS.RED};
  border-style: solid;
  flex-shrink: 0;
  border-width: ${({ $focused }) => ($focused ? "6px" : 0)};
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  color: ${BRANDING_COLORS.WHITE};
  transition: all 0.25s ease-in-out;
  transform: ${({ $focused }) => ($focused ? "scale(1.1)" : "scale(1)")};

  ${({ $focused }) =>
    $focused &&
    css`
      padding: 5px;
      animation: ${pop} 0.3s ease-out;
    `}
`;

export const MediaWrapper = styled.div`
  padding: 20px;
  display: flex;
  transition: transform 0.3s ease;
  gap: 10px;
`;

export const MediaScroll = styled.div`
  padding: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  flex-shrink: 1;
  flex-grow: 1;
  -ms-overflow-style: none;
  scrollbar-width: none;
  animation: fadeIn 0.5s ease;
  padding-right: 200px;
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

export const MediaCart = styled.div`
  display: flex;
  width: 235px;
  flex-direction: column;
  justify-content: center;
  text-align: start;
  align-items: center;
`;

export const TitleStyle = styled.div<{ $focused: boolean }>`
  padding-top: 10px;
  font-size: 24px;
  font-weight: 400;
  width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ $focused }) => ($focused ? `${BRANDING_COLORS.WHITE}` : `${BRANDING_COLORS.GREY}`)};
`;

export const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
