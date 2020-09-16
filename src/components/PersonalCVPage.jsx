import React from "react";
import Photo from "./Photo";
import ProfInfo from "./ProfInfo";
import IntroParag from "./IntroParag";
import KeyStatement from "./KeyStatement";
import AllIndvProjs from "./AllIndvProjs";
import Header from "./Header";
import styled from "styled-components";
import { DragDropContext } from "react-beautiful-dnd";

const Container = styled.div`
  display: flex;
`;

// onDragEnd = (result) => {};

const PersonalCVPage = () => {
  return (
    <>
      <Header />
      <main>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            <div className="PersonalCVPage">
              <Photo />
              <ProfInfo />
              <IntroParag />
              <KeyStatement />
              <AllIndvProjs />
            </div>
          </Container>
        </DragDropContext>
      </main>
    </>
  );
};

export default PersonalCVPage;
