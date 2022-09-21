import React, { cloneElement, Children, ReactElement } from "react";
import styled, { DefaultTheme } from "styled-components";
import { space } from "styled-system";
import { scales, variants } from "../Button/types";
import { ButtonTabsProps } from "./types";

interface StyledButtonTabsProps extends ButtonTabsProps {
  theme: DefaultTheme;
}

const getBackgroundColor = ({ theme, variant }: StyledButtonTabsProps) => {
  return theme.colors[variant === variants.SUBTLE ? "bgTabs" : "bgTabs"];
};

const getBorderColor = ({ theme, variant }: StyledButtonTabsProps) => {
  return theme.colors[variant === variants.SUBTLE ? "bgTabs" : "bgTabs"];
};

const StyledButtonTabs = styled.div<StyledButtonTabsProps>`
  background-color: ${getBackgroundColor};
  border-radius: 10px 10px 0 0;
  display: ${({ fullWidth }) => (fullWidth ? "flex" : "inline-flex")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  & > button,
  & > a {
    flex: ${({ fullWidth }) => (fullWidth ? 1 : "auto")};
  }
  & :hover {
    /* border-radius: 10px; */
  }

  & > button + button,
  & > a + a {
    /* To avoid focus shadow overlap */
    margin-left: 2px;
  }

  & > button,
  & a {
    box-shadow: none;
  }

  ${({ disabled, theme, variant }) => {
    if (disabled) {
      return `
        opacity: 0.5;

        & > button:disabled {
          background-color: transparent;
          color: ${variant === variants.PRIMARY ? theme.colors.textSubtle : theme.colors.textSubtle};
        }
    `;
    }
    return "";
  }}
  ${space}
`;

const ButtonTabs: React.FC<ButtonTabsProps> = ({
  activeIndex = 0,
  scale = scales.MD,
  variant = variants.PRIMARY,
  onItemClick,
  disabled,
  children,
  fullWidth = false,
  ...props
}) => {
  return (
    <StyledButtonTabs disabled={disabled} variant={variant} fullWidth={fullWidth} {...props}>
      {Children.map(children, (child: ReactElement, index) => {
        return cloneElement(child, {
          isActive: activeIndex === index,
          onClick: onItemClick ? () => onItemClick(index) : undefined,
          scale,
          variant,
          disabled,
        });
      })}
    </StyledButtonTabs>
  );
};

export default ButtonTabs;
