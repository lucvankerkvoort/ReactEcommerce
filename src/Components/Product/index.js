import React, { useContext } from "react";
import { store } from "../../Services";
import { MarginedView } from "../../Views";
import {
  ProductDetail,
  RightHero,
  LeftBanner,
  Section,
  BorderBanner,
  Remove,
  Image,
} from "./styles";

const Product = () => {
  const {
    dispatch,
    product: { title = "HotToddy", price = 15, img },
  } = useContext(store);
  return (
    <MarginedView>
      <Remove onClick={() => dispatch({ type: "removeProduct" })}>+</Remove>
      <Section>
        <LeftBanner>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div>Review</div>
        </LeftBanner>
        <RightHero>
          <Image img={img} />
          <ProductDetail>
            <h1>{title}</h1>
            <h2>${price}</h2>
          </ProductDetail>
        </RightHero>
        <BorderBanner>
          <button>Add To Cart</button>
          <button>Checkout</button>
        </BorderBanner>
      </Section>
    </MarginedView>
  );
};

export default Product;
