import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  isPushed?: boolean;
  theme: DefaultTheme;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isActive: boolean; isPushed: boolean }>`
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.textSubtle)};
  display: ${({ isPushed }) => (isPushed ? "block" : "none")};
  transition: color 0.4s;
  flex-grow: 1;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;

  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: ${({ secondary }) => (secondary ? "0 16px 0 64px" : "0 16px 0 32px")};
  font-size: ${({ secondary }) => (secondary ? "16px" : "16px")};
  background-color: ${({ secondary, theme }) => (secondary ? theme.colors.backgroundAlt : "transparent")};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.textDimmed)};
  a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  svg {
    fill: ${({ isActive, theme }) => (isActive ? theme.colors.primary : theme.colors.textDimmed)};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    svg {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
};

const LinkStatus = styled(Text)<{ color: keyof Colors; isPushed: boolean }>`
  border-radius: ${({ theme }) => theme.radii.default};
  display: ${({ isPushed }) => (isPushed ? "block" : "none")};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;

const LinkLabelMemo = React.memo(LinkLabel, (prev, next) => prev.isPushed === next.isPushed);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
