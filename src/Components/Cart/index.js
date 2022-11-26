import React, { useState, useContext } from "react";
import { store } from "../../Services";
import { Wrapper, List, CartHeader, Checkout } from "./styles";

import CartItem from "../CartItem";
const CartComponent = ({ checkout = () => {}, height }) => {
  const [isOpen, setOpen] = useState(false);

  const { cart } = useContext(store);

  return (
    <Wrapper id="cart" height={height} isOpen={isOpen}>
      <CartHeader onClick={() => setOpen(!isOpen)}>
        {isOpen ? (
          cart.length > 0 ? (
            <h3>Your Items</h3>
          ) : (
            <h3>Empty Cart</h3>
          )
        ) : (
          <img
            src="https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/cart.png?alt=media&token=107d84aa-dfe5-452c-95ef-5072ba56c07f"
            alt="cart"
            width="70rem"
          />
        )}
      </CartHeader>
      <List isOpen={isOpen}>
        {cart.length > 0 && (
          <>
            {cart.map((item, i) => (
              <CartItem key={i} {...item} />
            ))}
            <Checkout onClick={() => checkout(cart)}>Checkout</Checkout>
          </>
        )}
      </List>
    </Wrapper>
  );
};

export default CartComponent;
