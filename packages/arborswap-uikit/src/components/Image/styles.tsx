import styled from "styled-components";
import { variant as StyledSystemVariant } from "styled-system";
import { ImageProps, Variant, variants } from "./types";
import TokenImage from "./TokenImage";

interface StyledImageProps extends ImageProps {
  variant: Variant;
}

export const StyledPrimaryImage = styled(TokenImage)<StyledImageProps>`
  position: absolute;
  width: 90%;
  height: 90%;

  ${StyledSystemVariant({
    variants: {
      [variants.DEFAULT]: {
        marginLeft: "-20%",
        zIndex: 5,
      },
      [variants.INVERTED]: {
        marginLeft: "20%",
        zIndex: 6,
      },
    },
  })}
`;

export const StyledSecondaryImage = styled(TokenImage)<StyledImageProps>`
  position: absolute;
  width: 90%;
  height: 90%;

  ${StyledSystemVariant({
    variants: {
      [variants.DEFAULT]: {
        marginLeft: "20%",
        zIndex: 6,
      },
      [variants.INVERTED]: {
        marginLeft: "-20%",
        zIndex: 5,
      },
    },
  })}
`;
