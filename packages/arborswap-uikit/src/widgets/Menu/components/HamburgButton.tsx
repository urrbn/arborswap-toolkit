import React from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon, LogoIcon as LogoWithText } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  togglePush: () => void;
}

const HamburgButton: React.FC<Props> = ({ isPushed, togglePush }) => {
  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
    </Flex>
  );
};

export default React.memo(HamburgButton, (prev, next) => prev.isPushed === next.isPushed);
