import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 5px 5px 12px gray;
  max-width: 390px;
  max-height: 15.5rem;
  transition: 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.div`
  cursor: pointer;
  background: url(${({ img }) =>
    img ||
    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"});
  background-position: center;
  max-height: 20rem;
  min-height: 10rem;
  background-repeat: no-repeat;
  transition: 0.05s ease-in-out;

  &:active {
    transform: scale(0.5);
  }
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  // border-bottom: 1px solid black;
  border-top: 3px solid black;

  > h1 {
    padding: 0 1rem;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  width: 3rem;
  height: 3rem;
  z-index: 1;
`;

export const AddToCart = styled.button`
  cursor: pointer;
  transition: 0.05s ease-in-out;
  border: none;
  font-weight: bold;
  text-shadow: 1px 1px solid gray;
  color: white;
  border-radius: 2px;
  box-shadow: 3px 3px 3px black;
  font-size: 0.8rem;
  background: linear-gradient(
    to right bottom,
    #283d89,
    #274a97,
    #2557a4,
    #2364b1,
    #2171be,
    #1382cb,
    #0292d8,
    #00a3e3,
    #00baed,
    #00d1f2,
    #26e6f3,
    #5ffbf1
  );
  margin: 0.5rem;
  &:active {
    transform: scale(0.9);
    box-shadow: 1px 1px 1px black;
  }
`;
