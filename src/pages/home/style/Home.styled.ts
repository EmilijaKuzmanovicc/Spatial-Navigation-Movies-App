import styled from "styled-components";
import { BRANDING_COLORS } from "../../../constants/Colors";

export const HomePopularContainer = styled.div`
  width: 1400px;
  height: 900px;
`;
export const TopFiveContainer = styled.div`
  width: 312px;
  height: 840px;
  background-color: ${BRANDING_COLORS.BLACK};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  h2 {
    margin-top: 10px;
    font-size: 24px;
    font-weight: 700;
    color: ${BRANDING_COLORS.WHITE};
  }
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ChannelCartContainer = styled.div<{ $focused: boolean }>`
  width: 280px;
  height: 136px;
  margin: 5px;
  background-color: ${BRANDING_COLORS.LIGHT_BLACK};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-color: #ff0000;
  border-style: solid;
  border-width: ${({ $focused }) => ($focused ? "4px" : 0)};
  box-sizing: border-box;

  img {
    padding: 10px;
    height: auto;
    width: 90px;
  }
  h5 {
    padding-bottom: 5px;
    font-size: 16px;
    font-weight: 400;
    color: ${({ $focused }) => ($focused ? `${BRANDING_COLORS.WHITE}` : `${BRANDING_COLORS.LIGHTER_GREY}`)};
  }
`;

export const ImageDivStyle = styled.div`
  height: 90px;
  text-align: center;
  align-items: center;
  display: flex;
`;
