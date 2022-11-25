import React, { createContext, useReducer } from "react";
const initialState = {
  cart: [],
  product: {},
  filter: {},
  inventory: [
    {
      title: "HotToddy",
      id: "15",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
    {
      title: "HotToddy",
      price: 15,
      img: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081",
    },
  ],
};

export const store = createContext(initialState);
const { Provider } = store;
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "addToCart": {
        return Object.assign({}, state, {
          cart: [action.payload, ...state.cart],
        });
      }
      case "removeFromCart": {
        return Object.assign({}, state, {
          cart: state.cart.filter((item) => item !== action.payload),
        });
      }
      case "clearCart": {
        return Object.assign({}, state, { cart: [] });
      }
      case "setInventory": {
        return Object.assign({}, state, { inventory: action.payload });
      }
      case "setProduct": {
        return Object.assign({}, state, { product: action.payload });
      }
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};
