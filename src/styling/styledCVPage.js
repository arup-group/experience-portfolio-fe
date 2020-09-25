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
