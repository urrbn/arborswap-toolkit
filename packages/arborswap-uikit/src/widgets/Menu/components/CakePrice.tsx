import React from "react";
import styled from "styled-components";
import { LogoRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  cakePriceUsd?: number;
}

const PriceLink = styled.div`
  display: flex;
  align-items: center;
  border-radius: 14px;
  background: ${({ theme }) => theme.colors.roburna};
  color: "#FFFFFF";
  padding: 0px 8px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.1);
    }
  }
`;

const CakePrice: React.FC<Props> = ({ cakePriceUsd }) => {
  return cakePriceUsd ? (
    <PriceLink>
      <LogoRoundIcon width="18px" height="32px" mr="8px" />
      <Text color="#FFFFFF" bold>{`$${cakePriceUsd.toFixed(4)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(CakePrice);
