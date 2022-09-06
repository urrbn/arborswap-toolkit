import styled from "styled-components";
import Button from "../../../components/Button/Button";

const MenuButtonFixed = styled(Button)`
  color: ${({ theme }) => theme.colors.primary};
  padding: 8px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;
MenuButtonFixed.defaultProps = {
  variant: "primary-alt",
  size: "sm",
};

export default MenuButtonFixed;
