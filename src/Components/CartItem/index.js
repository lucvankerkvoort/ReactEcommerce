import React, { useContext } from "react";
import { store } from "../../Services";
import { Wrapper, Image, Text, Quantity, Row } from "./styles";
const CartItem = ({ price, title, img, id, quantity = 0 }) => {
  const { dispatch } = useContext(store);

  return (
    <Wrapper id={id}>
      <Image img={img} alt="img" />
      <Text>
        <h1> {title}</h1>
        <h2>${price}</h2>
      </Text>

      <Quantity>
        <label>Quantity</label>
        <Row>
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
          <img
            alt="trash"
            onClick={() =>
              dispatch({ type: "removeFromCart", payload: { id } })
            }
            src="./trash.png"
          />
        </Row>
      </Quantity>
    </Wrapper>
  );
};

export default CartItem;
