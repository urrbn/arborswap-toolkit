import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import Flex from "../../components/Box/Flex";
import { useMatchBreakpoints } from "../../hooks";
import HamburgButton from "./components/HamburgButton";
import HamburgButtonFixed from "./components/HamburgButtonFixed";
import Panel from "./components/Panel";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled.nav<{ showMenu: boolean; isPushed: boolean }>`
  position: fixed;
  top: 0;
  left: auto;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
    z-index: 20;
    top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT + 10}px`)};
  }

  padding-left: 8px;
  background-color: ${({ theme }) => theme.colors.bgWrapper};
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colors.bgWrapper};
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  userMenu,
  globalMenu,
  breadcrumbMenu,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  cakePriceUsd,
  links,
  children,
}) => {
  const { isMobile, isTablet } = useMatchBreakpoints();
  const isSmallerScreen = isMobile || isTablet;
  const [isPushed, setIsPushed] = useState(!isSmallerScreen);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentOffset = window.pageYOffset;
  //     const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
  //     const isTopOfPage = currentOffset === 0;
  //     // Always show the menu when user reach the top
  //     if (isTopOfPage) {
  //       setShowMenu(true);
  //     }
  //     // Avoid triggering anything at the bottom because of layout shift
  //     else if (!isBottomOfPage) {
  //       if (currentOffset < refPrevOffset.current) {
  //         // Has scroll up
  //         setShowMenu(true);
  //       } else {
  //         // Has scroll down
  //         setShowMenu(false);
  //       }
  //     }
  //     refPrevOffset.current = currentOffset;
  //   };
  //   const throttledHandleScroll = throttle(handleScroll, 300);

  //   window.addEventListener("scroll", throttledHandleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", throttledHandleScroll);
  //   };
  // }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <BodyWrapper>
        <StyledNav isPushed={isPushed} showMenu={showMenu}>
          <Flex>
            <HamburgButton isPushed={isPushed} togglePush={() => setIsPushed((prevState: boolean) => !prevState)} />
            <HamburgButtonFixed
              showMenu={showMenu}
              isPushed={isPushed}
              togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
            />
            {breadcrumbMenu}
          </Flex>
          <Flex alignItems="center">
            {globalMenu} {userMenu}
          </Flex>
        </StyledNav>
        <Panel
          isPushed={isPushed}
          isMobile={isSmallerScreen}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          cakePriceUsd={cakePriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
