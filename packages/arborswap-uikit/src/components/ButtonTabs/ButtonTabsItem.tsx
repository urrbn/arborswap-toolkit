import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonTabsItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  border-radius: 0;
  color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.textDimmed : theme.colors.textSubtle)};
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
`;

const BtnTabs: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  border-radius: 10px 10px 0 0 !important;
  background-color: ${({ theme }) => theme.colors.background};
  border-bottom: ${({ theme }) => theme.colors.primary} 3px solid;
  color: ${({ theme, variant }) => (variant === variants.PRIMARY ? theme.colors.primary : theme.colors.textSubtle)};
`;

const ButtonTabsItem: PolymorphicComponent<ButtonTabsItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonTabsItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <BtnTabs forwardedAs={as} variant={variant} {...props} />;
};

export default ButtonTabsItem;
