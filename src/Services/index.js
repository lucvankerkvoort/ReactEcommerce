import React, { createContext, useReducer } from "react";
import { uuidv4 } from "./utils";
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
        const copyCart = [...state.cart];
        const newItem = action.payload;
        const isInCart = copyCart.some((item) => item.id === newItem.id);

        if (isInCart) {
          copyCart.forEach((item) => {
            if (item.id === newItem.id) {
              return (item.quantity += 1);
            }
          });
        } else {
          newItem.quantity = 1;
          copyCart.push(newItem);
        }

        return Object.assign({}, state, {
          cart: copyCart,
        });
      }
      case "setQuantity": {
        const copyCart = [...state.cart];
        const { id, quantity } = action.payload;
        copyCart.map((item) => {
          if (item.id === id) {
            return (item.quantity = quantity);
          }
          return item;
        });

        return Object.assign({}, state, {
          cart: copyCart,
        });
      }
      case "removeFromCart": {
        const { id } = action.payload;
        return Object.assign({}, state, {
          cart: state.cart.filter((item) => item.id !== id),
        });
      }
      case "clearCart": {
        return Object.assign({}, state, { cart: [] });
      }
      case "setInventory": {
        const newInventory = [...action.payload];
        newInventory.forEach((item) => (item.id = uuidv4()));

        return Object.assign({}, state, { inventory: action.payload });
      }
      case "setProduct": {
        return Object.assign({}, state, { product: action.payload });
      }
      case "removeProduct": {
        return Object.assign({}, state, { product: {} });
      }
      default:
        throw new Error("end of switch statement at Context store");
    }
  }, initialState);

  return <Provider value={{ ...state, dispatch }}>{children}</Provider>;
};
