import styled from "styled-components";
import { BRANDING_COLORS } from "../../../constants/Colors";

export const LogoContainer = styled.div`
  width: 350px;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: column;
`;
export const LogoName = styled.img`
  width: 300px;
  height: 45px;
  padding: 5px;
`;
export const LogoDescription = styled.img`
  width: 300px;
  height: 8px;
  margin: 5px;
`;
export const NavbarStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  text-align: center;
  align-items: center;
`;

export const ItemsContainer = styled.div`
  display: flex;
  gap: 100px;
  margin-left: 50px;
`;

export const NavbarItemStyle = styled.div<{ $focused: boolean; $selected: boolean }>`
  position: relative;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 6%;
  color: ${({ $selected }) => ($selected ? BRANDING_COLORS.WHITE : BRANDING_COLORS.GREY)};
  padding-bottom: 4px;
  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: -17px;
    width: calc(100% + 34px);
    height: ${({ $focused }) => ($focused ? "4px" : "0px")};
    background-color: ${({ $focused }) => ($focused ? `${BRANDING_COLORS.RED}` : `${BRANDING_COLORS.BLACK_TRANSPARENT}`)};
    transition: background-color 0.2s ease;
  }
`;
