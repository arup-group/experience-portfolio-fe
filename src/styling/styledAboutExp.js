import styled from "styled-components";

export const StyledMain = styled.section`
  display: grid;
  grid-template-columns: 0.5fr 3fr 0.5fr;
  grid-template-rows: repeat(3, minmax(75px, auto));

  section {
    grid-column-start: 2;
    grid-column-end: 3;
  }
`;
