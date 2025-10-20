import styled from "styled-components";
import { BRANDING_COLORS } from "../../../utils";

export const WatchButtonStyle = styled.button<{ $focused: boolean }>`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 286px;
  height: 78px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${({ $focused }) => ($focused ? `${BRANDING_COLORS.RED}` : `${BRANDING_COLORS.BACK_BUTTON}`)};
  border-radius: 300px;
  border: none;
  color: ${BRANDING_COLORS.WHITE};
  font-size: 20px;
  font-weight: bold;
  img {
    width: 15px;
    height: 17px;
    margin-right: 20px;
  }
`;
