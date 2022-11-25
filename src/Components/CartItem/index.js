import React from "react";
import { Wrapper, Image, Text } from "./styles";
const CartItem = () => {
  return (
    <Wrapper>
      <Image>img</Image>
      <Text>
        <h1> title</h1>
        <h2>price</h2>
      </Text>
    </Wrapper>
  );
};

export default CartItem;
