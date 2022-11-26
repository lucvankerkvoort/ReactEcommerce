import React, { useContext } from "react";
import { store } from "../../Services";
import { Wrapper, Image, Text, Quantity } from "./styles";
const CartItem = ({ price, title, img, id, quantity = 0 }) => {
  const { dispatch } = useContext(store);

  return (
    <Wrapper id={id}>
      <Image img={img} />
      <Text>
        <h1> {title}</h1>
        <h2>${price}</h2>
      </Text>

      <Quantity>
        <label>Quantity</label>
        <input
          type="number"
          onChange={(e) =>
            dispatch({
              type: "setQuantity",
              payload: { id, quantity: parseInt(e.target.value) },
            })
          }
          value={quantity}
          min={0}
        />
      </Quantity>
    </Wrapper>
  );
};

export default CartItem;
