import React from "react";
import styled from "styled-components";

import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";

const Icons = IconModule as unknown as { [key: string]: React.FC<SvgProps> };

const StyledLink = styled(Link)`
  padding: 7px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.bgDarker};
`;

const SocialLinks: React.FC = () => (
  <Flex>
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "20px", color: "text", style: { cursor: "pointer" } };
      const mr = index < socials.length - 1 ? "14px" : 0;
      // if (social.items) {
      //   return (
      //     <Dropdown
      //       key={social.label}
      //       position="top-right"
      //       target={
      //         <StyledLink mr={mr}>
      //           <Icon {...iconProps} />
      //         </StyledLink>
      //       }
      //     >
      //       {social.items.map((item) => (
      //         <Link external key={item.label} href={item.href} aria-label={item.label} color="text">
      //           {item.label}
      //         </Link>
      //       ))}
      //     </Dropdown>
      //   );
      // }
      return (
        <StyledLink external key={social.label} href={social.href} aria-label={social.label} mr={mr}>
          <Icon {...iconProps} />
        </StyledLink>
      );
    })}
  </Flex>
);

export default React.memo(SocialLinks, () => true);
