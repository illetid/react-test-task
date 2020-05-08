import * as React from "react";
import styled from "@emotion/styled";

const StyledRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;
const Row = ({ children }) => {
  return <StyledRow>{children}</StyledRow>;
};

export default Row;
