import styled, { createGlobalStyle } from "styled-components";

export const styleColours = {
  veryDark: "#242124",
  quiteDark: "#4d7298",
  middle: "#E0CCD2",
  quiteLight: "#CAE4C8",
  veryLight: "#F5F1E3",
};

export const GlobalStyle = createGlobalStyle`
 body{
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: ${styleColours.veryLight};
  color: ${styleColours.veryDark};
  border-color: ${styleColours.veryDark};
  text-align: center;
  width: 80vw;
  justify-self: center
 }

 code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
hr{
  background-color: ${styleColours.veryDark};
  margin: 0px;
  border: none;
  height: 1px;
}

button{
  margin: 2px;
  font-size: 1em;
  border: 1px solid ${styleColours.quiteDark};
  border-radius: 2px;
  display: inline-block
}

ul{
  list-style: none;
  padding-left: 0;
  margin-top: 0;
}

li{
  padding-left: 100px;
  padding-right: 100px;
  margin: 10px;
}

h5{
  display: inline
}

`;

export const StyledHeader = styled.header`
  background-color: ${styleColours.quiteDark};
  min-height: 10vh;
  margin: 5px;
  padding-right: 10px;
  padding-left: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
  border-radius: 5px;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
  /* font-size: calc(10px + 2vmin); */
  color: ${styleColours.veryLight};
  align-items: center;
  justify-content: space-between;

  .info {
    padding-left: 100px;
    padding-right: 100px;
    font-size: 10px;
  }
`;

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  background-color: ${styleColours.middle};
  padding: 10px;
  height: 60px;
  overflow-y: visible;
  border: 2px solid;
`;

//Why do we need to define the background here?  Shouldn't it inherit global? (it doesn't, it goes transparent...)
export const StyledLogin = styled.section`
  padding: 5px;
  position: sticky;
  top: 84px;
  overflow-y: visible;
  border: 2px solid;
  border-top: 0;
  background: ${styleColours.veryLight};

  input {
    height: 22px;
  }
`;

//The below is used for homepage, loader, error page
export const StyledSection = styled.section`
  border: 2px solid;
  margin-top: -2px;
`;

export const StyledNavButton = styled.button``;
