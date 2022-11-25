import styled from "styled-components";

export const Wrapper = styled.div`
  ${({ view, rows = 1, columns = 1 }) => {
    switch (view) {
      case "row": {
        return `grid-template-rows: repeat(320px, ${rows}) `;
      }
      case "column": {
        return `grid-template-column: repeat(320px, ${columns})`;
      }
      default: {
        return `display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1.5rem;
  overflow: scroll;`;
      }
    }
  }};
  display: grid;
  min-height: 16rem;
  width: 100%;
  border: 1px solid black;
`;
