import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  box-shadow: 5px 5px 8px gray;
  margin: 1rem;
  justify-content: space-between;
`;

export const Image = styled.div`
  width: 30%;
  background: url(${({ img }) =>
    img ||
    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"});

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Text = styled.div`
  width: 40%;
  text-align: center;
`;

export const Quantity = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  > input {
    width: 80%;
    height: 30%;
    box-shadow: 3px 3px 3px black;
  }
`;
