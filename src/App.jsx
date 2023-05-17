import { useState } from "react";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import QuestionsPage from "./components/QuestionsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AskPage from "./components/AskPage";
import UserContext from "./components/UserContext";
import LoginPage from "./components/LoginPage";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
body{
  background: #2d2d2d;
  color: white;
  font-family: Montserrat, sans-serif;
}`;

function App() {
  const [user, setUser] = useState(null)
  
  return (
    <>
      <Reset />
      <GlobalStyles />

      <Router>
        <UserContext.Provider value={{user}}>
        <Header />
        <Routes>
          <Route path="/ask" element={<AskPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<QuestionsPage />} />
        </Routes>
        </UserContext.Provider>
      </Router>
    </>
  );
}

export default App;
