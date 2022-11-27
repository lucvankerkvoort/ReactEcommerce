import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 40rem;
  background: white;
  position: fixed;
  box-shadow: 5px 5px 10px gray;
  top: 2rem;
  left: 2rem;
  transition: 0.05s ease-in-out;
  z-index: 2;

  ${({ isOpen }) =>
    !isOpen &&
    `border-radius: 50%;     
   `}
`;

export const List = styled.div`
  transition: 0.25s ease-in-out;
  overflow: scroll;
  ${({ isOpen }) =>
    isOpen
      ? `width: 40rem;
  max-height: 42rem;`
      : `width: 0rem;
  max-height: 0rem;`}
`;

export const CartHeader = styled.div`
  cursor: pointer;
  ${({ isOpen }) =>
    isOpen
      ? `
  border-radius: 50%;`
      : `
border-radius: 0;
padding: 2rem;`};

  > h3 {
    text-align: center;
  }
`;

export const Checkout = styled.button`
  display: flex;
  cursor: pointer;
  border: 1px solid black;
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
  font-size: 1.1rem;
  font-weight: 900;
  color: white;
  margin: 1rem auto;
  height: 3rem;
  width: 15rem;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  border: none;
  box-shadow: 4px 4px 4px black;
  transition: 0.05s;

  &:active {
    transform: scale(0.9);
    box-shadow: 2px 2px 2px black;
  }
`;
