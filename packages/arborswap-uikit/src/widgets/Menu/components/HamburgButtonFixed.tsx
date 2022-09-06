import React from "react";
import styled, { keyframes } from "styled-components";
import Flex from "../../../components/Box/Flex";
import { HamburgerCloseIcon } from "../icons";
import { ArrowLeftIcon } from "../../../components/Svg";
import MenuButtonFixed from "./MenuButtonFixed";

interface Props {
  isPushed: boolean;
  togglePush: () => void;
}

const StyledFlex = styled(Flex)`
  display: none;
  position: absolute;
  left: -30px;
  top: 70px;
  ${({ theme }) => theme.mediaQueries.nav} {
    display: block;
  }
`;

const HamburgButtonFixed: React.FC<Props> = ({ togglePush }) => {
  return (
    <StyledFlex>
      <MenuButtonFixed aria-label="Toggle menu" onClick={togglePush} mr="24px">
        <ArrowLeftIcon width="24px" color="primary" />
      </MenuButtonFixed>
    </StyledFlex>
  );
};

export default React.memo(HamburgButtonFixed, (prev, next) => prev.isPushed === next.isPushed);
