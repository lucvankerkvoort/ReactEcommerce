import React, { useContext } from "react";
import { Wrapper } from "./styles";
import { store } from "../../Services/";
import Item from "../Item";

const Store = ({ view = "full" }) => {
  const { inventory, cart, product } = useContext(store);

  return (
    <Wrapper view={view}>
      {inventory.map(({ title, price, img, id }, i) => (
        <Item img={img} price={price} key={title + i} id={id} title={title} />
      ))}
    </Wrapper>
  );
};

export default Store;
