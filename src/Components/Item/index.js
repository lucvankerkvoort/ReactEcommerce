import React, { useContext } from "react";
import { store } from "../../Services";
import { Wrapper, Title, Image, Price, AddToCart } from "./styles";
const Item = ({ price = 15, title = "Hottoddy", img, id = "12" }) => {
  const { dispatch } = useContext(store);
  return (
    <Wrapper>
      <Price>${price}</Price>
      <Image
        onClick={() =>
          dispatch({ type: "setProduct", payload: { price, title, img, id } })
        }
        img={img}
      />
      <Title>
        <h1>{title}</h1>
        <AddToCart
          onClick={() =>
            dispatch({ type: "addToCart", payload: { price, title, img, id } })
          }
        >
          Add to Cart
        </AddToCart>
      </Title>
    </Wrapper>
  );
};

export default Item;
