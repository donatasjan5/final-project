import styled from "styled-components";
import QuestionRow from "./QuestionRow";

const StyledHeader = styled.h1`
  font-size: 1.8rem;
`;
const HeaderRow = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  padding: 30px 20px;
`;

const BlueButton = styled.button`
  background-color: blue;
  color: white;
  border: 0;
  border-radius: 4px;
  padding: 15px 10px;
`;

const QuestionsPage = () => {
  return (
    <main>
      <HeaderRow>
        <StyledHeader>Top Questions</StyledHeader>
        <BlueButton>Ask&nbsp;Question</BlueButton>
      </HeaderRow>
    <QuestionRow />
    </main>
  );
};

export default QuestionsPage;
