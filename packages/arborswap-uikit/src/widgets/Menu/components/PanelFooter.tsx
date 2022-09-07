import React from "react";
import styled from "styled-components";
import { CogIcon } from "../../../components/Svg";
import IconButton from "../../../components/Button/IconButton";
import { MENU_ENTRY_HEIGHT } from "../config";
import { PanelProps, PushedProps } from "../types";
import CakePrice from "./CakePrice";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";

interface Props extends PanelProps, PushedProps {}

const Container = styled.div`
  flex: none;
  padding: 8px 4px;
  background-color: ${({ theme }) => theme.nav.background};
  border-top: solid 2px rgba(133, 133, 133, 0.1);
`;

const SettingsEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 8px;
`;

const SocialEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
`;

const CopyrightEntry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  padding: 0 16px;
  font-size: 10px;
  line-height: 120%;
  color: ${({ theme }) => theme.colors.textDimmed};
  text-align: center;
`;

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  cakePriceUsd,
  currentLang,
  langs,
  setLang,
}) => {
  if (!isPushed) {
    return (
      <Container>
        <SocialEntry>
          <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        </SocialEntry>
        <SocialEntry>
          <CakePrice cakePriceUsd={cakePriceUsd} />
        </SocialEntry>
      </Container>
    );
  }

  return (
    <Container>
      <SocialEntry>
        <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
        <CakePrice cakePriceUsd={cakePriceUsd} />
      </SocialEntry>
      <SocialEntry>
        <SocialLinks />
      </SocialEntry>

      <CopyrightEntry>
        <span>@2022 Arborswap. All right Reserved. </span>
      </CopyrightEntry>
    </Container>
  );
};

export default PanelFooter;
