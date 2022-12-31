import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { LogoIcon } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import { LogoIcon as LogoWithText } from "../icons";

interface Props {
  isPushed: boolean;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  padding-top: 20px;
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 32px;
  }
  .desktop-icon {
    margin: 0 auto;
    width: 160px;
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, href }) => {
  const isAbsoluteUrl = href.startsWith("http");
  // console.log("isPushed :", isPushed);
  // console.log("isAbsoluteUrl :", isAbsoluteUrl);
  return (
    <Flex>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Arborswap home page">
          {isPushed ? <LogoWithText className="desktop-icon" /> : <LogoIcon className="mobile-icon" />}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Arborswap home page">
          {isPushed ? <LogoWithText className="desktop-icon" /> : <LogoIcon className="mobile-icon" />}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed);
