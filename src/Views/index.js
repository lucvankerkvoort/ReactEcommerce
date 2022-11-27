import React from "react";
import { Wrapper, Content } from "./styles";

export const MarginedView = ({ children, justify }) => {
  return (
    // Outside Div with content width of 80%
    <Wrapper>
      {/* Inside Div display flex-direction = column */}
      <Content justify={justify}>{children}</Content>
    </Wrapper>
  );
};
