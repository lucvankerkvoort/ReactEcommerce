import styled from "styled-components";

export const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RightHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
  width: 60%;
  height: 100%;
  border: 1px solid black;
  padding: 2rem;
  box-shadow: 1rem 1rem 1.5rem gray;
`;

export const LeftBanner = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  margin: 1rem;
  padding 2rem;
  overflow: hidden;
  border: 1px solid black;
  height: 100%;
  box-shadow: -0.5rem 0.5rem 1.5rem gray;

  > p {
    overflow: hidden;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
  height: 60%;
  width: 100%;
`;

export const BorderBanner = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const Remove = styled.button`
  position: absolute;
  color: white;
  border: none;
  top: 1rem;
  right: 1rem;
  border-radius: 50%;
  font-size: 2rem;
  transform: rotate(45deg);
  padding: 0.2rem 0.8rem;
  background: linear-gradient(
    to right bottom,
    #be1f42,
    #a11b36,
    #84172a,
    #691220,
    #4f0d16
  );
  transition: 0.05s ease-in-out;
  box-shadow: 6px -1px 2px black;

  &:active {
    transform: rotate(45deg) scale(0.9);

    box-shadow: 2px 0px 0px black;
  }
`;

export const Image = styled.div`
  background: urL(${({ img }) => img});
  width: 100%;
  height: 80%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
