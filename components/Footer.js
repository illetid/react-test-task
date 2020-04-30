import * as React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};
