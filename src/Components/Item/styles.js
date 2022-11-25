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
  &:active {
    transform: scale(0.95);
  }
`;

export const Image = styled.div`
  background: url(${({ img }) => img});
  background-position: center;
  max-height: 20rem;
  min-height: 10rem;
  background-repeat: no-repeat;
`;
export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;

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
`;
