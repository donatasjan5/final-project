import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import QuestionsPage from "./components/QuestionsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AskPage from "./components/AskPage";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body{
  background: #2d2d2d;
  color: white;
  font-family: Montserrat, sans-serif;
}`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyles />

      <Router>
        <Header />
        <Routes>
          <Route path="/ask" element={<AskPage />} />
          <Route path="/" element={<QuestionsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
