import styled from "styled-components";
import QuestionRow from "./QuestionRow";
import Header1 from "./Header1";
import BlueButtonLink from "./BlueButtonLink";

const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px 20px;
`;

const QuestionsPage = () => {
  return (
    <main>
      <HeaderRow>
        <Header1>Top Questions</Header1>
        <BlueButtonLink to={"/ask"}>Ask&nbsp;Question</BlueButtonLink>
      </HeaderRow>
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
      <QuestionRow />
    </main>
  );
};

export default QuestionsPage;




// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import Header1 from "./Header1";
// import BlueButtonLink from "./BlueButtonLink";

// const HeaderRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr min-content;
//   padding: 30px 20px;
// `;

// const QuestionContainer = styled.div`
//   background-color: #444;
//   border-radius: 4px;
//   margin-top: 20px;
//   padding: 20px;
//   &:not(:first-child) {
//     margin-top: 10px;
//   }
// `;

// const QuestionsPage = () => {
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     // Patikrinkite, ar yra naujų klausimų ir gaukite juos iš lokalios atminties
//     const newQuestion = localStorage.getItem("newQuestion");
//     if (newQuestion) {
//       const parsedQuestion = JSON.parse(newQuestion);
//       setQuestions((prevQuestions) => [...prevQuestions, parsedQuestion]);
//       localStorage.removeItem("newQuestion");
//     }
//   }, []);

//   return (
//     <main>
//       <HeaderRow>
//         <Header1>Top Questions</Header1>
//         <BlueButtonLink to={"/ask"}>Ask&nbsp;Question</BlueButtonLink>
//       </HeaderRow>
//       {questions.length > 0 ? (
//         questions.map((question, index) => (
//           <QuestionContainer key={index}>
//             <h3>{question.title}</h3>
//             <p>{question.body}</p>
//           </QuestionContainer>
//         ))
//       ) : (
//         <p>No questions yet.</p>
//       )}
//     </main>
//   );
// };

// export default QuestionsPage;
