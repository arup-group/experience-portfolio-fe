import styled from "styled-components";
import { styleColours } from "./styledGlobal";

export const StyledCVPage = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(3, minmax(75px, auto));
  grid-template-areas:
    "userPhoto introParag"
    "profInfo valueStatement"
    "profInfo projectList"
    " .  projectList";
`;

export const StyledUserPhoto = styled.section`
  grid-area: userPhoto;
  border: hidden;
  background: ${styleColours.quiteLight};
  border-radius: 5px;
  margin: 5px;
`;

export const StyledUserImg = styled.img`
  max-width: 80%;
  height: auto;
`;

export const StyledProfInfo = styled.section`
  grid-area: profInfo;
  border: hidden;
  background: ${styleColours.quiteLight};
  border-radius: 5px;
  padding-bottom: 5px;
  margin: 5px;
  text-align: left;
`;

export const StyledIntroParagraph = styled.section`
  grid-area: introParag;
  border: hidden;
  background: ${styleColours.quiteLight};
  border-radius: 5px;
  margin: 5px;
`;

export const StyledValueStatement = styled.section`
  grid-area: valueStatement;
  border: hidden;
  background: ${styleColours.quiteLight};
  border-radius: 5px;
  margin: 5px;
`;

export const StyledProjectsContainer = styled.section`
  grid-area: projectList;
  list-style-type: none;
  border: hidden;
  background: ${styleColours.veryDark};
  border-radius: 5px;
  margin: auto;
`;

export const StyledProjectCard = styled.li`
  border: hidden;
  background: ${styleColours.middle};
  border-radius: 5px;
  margin: 5px;
  padding: 10px;
  text-align: justify;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 40px 40px 40px auto 40px auto;

  h3 {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  h5 {
    padding: 0;
    margin: 0;
    align-self: center;
  }
  h6 {
    padding: 0;
    margin: 0;
    align-self: center;
  }

  div {
    grid-column-start: 3;
    grid-column-end: 5;
    margin-left: 10px;
    margin-top: 5px;
    justify-self: center;
    align-self: center;
    font-size: 14px;
  }

  .twoSpans {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  label {
  }

  p {
  }

  .switch {
    height: 10px;
    margin: auto;
  }

  button {
    margin: 1px;
    font-size: 1em;
    padding: 1px;
    border: 1px solid ${styleColours.quiteLight};
    border-radius: 2px;
  }

  span {
    grid-column-start: 1;
    grid-column-end: 6;
    margin-top: 10px;
  }
`;

export const StyledFilters = styled.section`
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
  display: grid;
  height: auto;
  background: ${styleColours.middle};
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  grid-gap: 5px;
  /* grid-template-areas:
    "dates filters"
    "buttons buttons"; */
`;

export const StyledFilterHeader = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const StyledFitlerContainer = styled.section`
  grid-column-start: 1;
  grid-column-end: 2;

  display: grid;
  grid-template-columns: 210px auto;
  grid-gap: 5px;
`;

export const StyledKeywordsContainer = styled.section`
  grid-column-start: 2;
  grid-column-end: 3;
`;

export const StyledFilterButtons = styled.section`
  grid-column-start: 1;
  grid-column-end: 3;
`;
