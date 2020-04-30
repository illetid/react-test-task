import * as React from "react";
import styled from "@emotion/styled";
const StyledColumn = styled.div`
  padding: 12px;
  flex: 0 0 ${({ width }) => (width / 12) * 100}%;
  max-width: ${({ width }) => (width / 12) * 100}%;
`;
const Column = ({ width, children }) => {
  return <StyledColumn width={width}>{children}</StyledColumn>;
};
export default Column;
