import styled, { css } from "styled-components";
import { pop } from "../../../constants/Pop";
import { BRANDING_COLORS } from "../../../constants/Colors";
import { URL_IMAGES } from "../../../constants/URLs";

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
export const MediaItemBox = styled.div.attrs<{
  $focused: boolean;
  $poster_path: string;
  $sizeH: string;
  $sizeW: string;
}>((props) => {
  const isLocal = props.$poster_path.startsWith("/");
  const imageUrl = isLocal ? `${import.meta.env.VITE_TMDB_IMAGE_URL}${props.$poster_path}` : `${URL_IMAGES.IMAGE_NOT_FOUND}`;

  return {
    style: {
      height: props.$sizeH,
      width: props.$sizeW,
      backgroundImage: `url(${imageUrl})`,
      borderWidth: props.$focused ? "6px" : "0",
      transform: props.$focused ? "scale(1.1)" : "scale(1)",
    },
  };
})<{
  $focused: boolean;
  $poster_path: string;
  $sizeH: string;
  $sizeW: string;
}>`
  background-color: ${BRANDING_COLORS.GREY};
  margin: 10px;
  padding: 10px;
  background-size: cover;
  background-position: center;
  border-color: ${BRANDING_COLORS.RED};
  border-style: solid;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 6px;
  display: flex;
  color: ${BRANDING_COLORS.WHITE};
  transition: all 0.25s ease-in-out;

  ${({ $focused }) =>
    $focused &&
    css`
      padding: 5px;
      animation: ${pop} 0.3s ease-out;
    `}
`;

// export const MediaItemBox = styled.div.attrs<{
//   $focused: boolean;
//   $poster_path: string;
//   $sizeH: string;
//   $sizeW: string;
// }>((props) => ({
//   style: {
//     height: props.$sizeH,
//     width: props.$sizeW,
//     backgroundImage: `url(${import.meta.env.VITE_TMDB_IMAGE_URL}${props.$poster_path})`,
//     borderWidth: props.$focused ? "6px" : "0",
//     transform: props.$focused ? "scale(1.1)" : "scale(1)",
//   },
// }))<{
//   $focused: boolean;
//   $poster_path: string;
//   $sizeH: string;
//   $sizeW: string;
// }>`
//   background-color: ${BRANDING_COLORS.GREY};
//   margin: 10px;
//   padding: 10px;
//   background-size: cover;
//   background-position: center;
//   border-color: ${BRANDING_COLORS.RED};
//   border-style: solid;
//   flex-shrink: 0;
//   box-sizing: border-box;
//   border-radius: 6px;
//   display: flex;
//   color: ${BRANDING_COLORS.WHITE};
//   transition: all 0.25s ease-in-out;

//   ${({ $focused }) =>
//     $focused &&
//     css`
//       padding: 5px;
//       animation: ${pop} 0.3s ease-out;
//     `}
// `;

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

export const RowCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
