import React, { useState } from "react";
import styled from "styled-components";
/* eslint-disable import/no-unresolved */
import { Meta } from "@storybook/react/types-6-0";
import Box from "../Box/Box";
import ButtonTabs from "./ButtonTabs";
import ButtonTabsItem from "./ButtonTabsItem";
import { AddIcon, AutoRenewIcon, LogoIcon } from "../Svg";

const Row = styled.div`
  margin-bottom: 32px;

  & > button + button {
    margin-left: 16px;
  }
`;

export default {
  title: "Components/Button Tabs",
  component: ButtonTabs,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex) => setIndex(newIndex);
  const handleClick1 = (newIndex) => setIndex1(newIndex);

  return (
    <>
      <Row>
        <ButtonTabs activeIndex={index} onItemClick={handleClick}>
          <ButtonTabsItem icons={<AutoRenewIcon />}>Button 1</ButtonTabsItem>
          <ButtonTabsItem>Button 2</ButtonTabsItem>
          <ButtonTabsItem>Button 3</ButtonTabsItem>
        </ButtonTabs>
      </Row>
      <Row>
        <ButtonTabs activeIndex={index1} onItemClick={handleClick1} scale="sm" ml="24px">
          <ButtonTabsItem>Button 1</ButtonTabsItem>
          <ButtonTabsItem>Button 2</ButtonTabsItem>
          <ButtonTabsItem>Button 3</ButtonTabsItem>
        </ButtonTabs>
      </Row>
      <Row>
        <ButtonTabs activeIndex={index} onItemClick={handleClick} variant="subtle">
          <ButtonTabsItem>Button 1</ButtonTabsItem>
          <ButtonTabsItem>Button 2</ButtonTabsItem>
          <ButtonTabsItem>Button 3</ButtonTabsItem>
        </ButtonTabs>
      </Row>
      <Row>
        <ButtonTabs activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle" ml="24px">
          <ButtonTabsItem>Button 1</ButtonTabsItem>
          <ButtonTabsItem>Button 2</ButtonTabsItem>
          <ButtonTabsItem>Button 3</ButtonTabsItem>
          <ButtonTabsItem>Button 4</ButtonTabsItem>
        </ButtonTabs>
      </Row>
    </>
  );
};

export const AsLinks: React.FC = () => {
  return (
    <Row>
      <ButtonTabs activeIndex={0}>
        <ButtonTabsItem as="a" href="#">
          Link 1
        </ButtonTabsItem>
        <ButtonTabsItem as="a" href="#">
          Link 2
        </ButtonTabsItem>
        <ButtonTabsItem as="a" href="#">
          Link 3
        </ButtonTabsItem>
      </ButtonTabs>
    </Row>
  );
};

export const DisabledMenu: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(1);

  const handleClick = (newIndex) => setIndex(newIndex);
  const handleClick1 = (newIndex) => setIndex1(newIndex);
  return (
    <>
      <Row>
        <ButtonTabs activeIndex={index} onItemClick={handleClick}>
          <ButtonTabsItem>Button 1</ButtonTabsItem>
          <ButtonTabsItem>Button 2</ButtonTabsItem>
          <ButtonTabsItem>Button 3</ButtonTabsItem>
          <ButtonTabsItem>Button 4</ButtonTabsItem>
        </ButtonTabs>
      </Row>
      <Row>
        <ButtonTabs disabled activeIndex={index} onItemClick={handleClick}>
          <ButtonTabsItem>Disabled 1</ButtonTabsItem>
          <ButtonTabsItem>Disabled 2</ButtonTabsItem>
          <ButtonTabsItem>Disabled 3</ButtonTabsItem>
          <ButtonTabsItem>Disabled 4</ButtonTabsItem>
        </ButtonTabs>
      </Row>
      <Row>
        <ButtonTabs activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle" ml="24px">
          <ButtonTabsItem>Button 1</ButtonTabsItem>
          <ButtonTabsItem>Button 2</ButtonTabsItem>
          <ButtonTabsItem>Button 3</ButtonTabsItem>
          <ButtonTabsItem>Button 4</ButtonTabsItem>
        </ButtonTabs>
      </Row>
      <Row>
        <ButtonTabs disabled activeIndex={index1} onItemClick={handleClick1} scale="sm" variant="subtle" ml="24px">
          <ButtonTabsItem>Disabled 1</ButtonTabsItem>
          <ButtonTabsItem>Disabled 2</ButtonTabsItem>
          <ButtonTabsItem>Disabled 3</ButtonTabsItem>
          <ButtonTabsItem>Disabled 4</ButtonTabsItem>
        </ButtonTabs>
      </Row>
    </>
  );
};

export const FullWidthMenu: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleClick = (newIndex: number) => setIndex(newIndex);

  return (
    <Box width="840px">
      <ButtonTabs activeIndex={index} onItemClick={handleClick} fullWidth mb="24px">
        <ButtonTabsItem>Button 1</ButtonTabsItem>
        <ButtonTabsItem>Button 2</ButtonTabsItem>
        <ButtonTabsItem>Button 3</ButtonTabsItem>
        <ButtonTabsItem>Button 4</ButtonTabsItem>
      </ButtonTabs>
      <ButtonTabs activeIndex={index} fullWidth scale="sm" variant="subtle">
        <ButtonTabsItem as="a" href="#">
          Link 1
        </ButtonTabsItem>
        <ButtonTabsItem as="a" href="#">
          Link 2
        </ButtonTabsItem>
        <ButtonTabsItem as="a" href="#">
          Link 3
        </ButtonTabsItem>
      </ButtonTabs>
    </Box>
  );
};
