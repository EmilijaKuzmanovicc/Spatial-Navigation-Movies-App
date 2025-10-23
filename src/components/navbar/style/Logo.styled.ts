import styled from "styled-components";
import { BRANDING_COLORS } from "../../../utils";

export const LogoContainer = styled.div`
  width: 350px;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;
export const LogoName = styled.img`
  width: 302px;
  height: 60px;
`;

export const NavbarStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  text-align: center;
  align-items: center;
  position: relative;
  z-index: 2;
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
  color: ${({ $selected, $focused }) => ($selected ? BRANDING_COLORS.WHITE : $focused ? BRANDING_COLORS.WHITE : BRANDING_COLORS.GREY)};
  padding-bottom: 4px;
  transition: color 0.2s ease;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: -17px;
    width: calc(100% + 34px);
    height: ${({ $focused }) => ($focused ? "4px" : "0px")};
    background-color: ${({ $focused }) => ($focused ? `${BRANDING_COLORS.RED}` : `${BRANDING_COLORS.BLACK_TRANSPARENT}`)};
    transition: background-color 0.4s ease;
    transform: scale(1.02);
  }
`;
