import { Reset } from "styled-reset";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import QuestionsPage from "./components/QuestionsPage";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body{
  background: #2d2d2d;
  color: white;
  font-family: Montserrat, sans-serif
  
}`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />
      <Header />
      <QuestionsPage />
    </>
  );
}

export default App;
