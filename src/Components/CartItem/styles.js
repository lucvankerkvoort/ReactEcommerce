import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  border: 1px solid black;

  justify-content: space-between;
  > div {
    border: 3px solid black;
  }
`;

export const Image = styled.div`
  width: 50%;
`;

export const Text = styled.div`
  width: 50%;
  text-align: center;
`;
