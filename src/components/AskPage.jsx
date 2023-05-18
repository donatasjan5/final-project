import React, { useState } from "react";
import styled from "styled-components";
import Header1 from "./Header1";
import BlueButton from "./BlueButton";
import Input from "./Input";

const Container = styled.div`
  padding: 30px 20px;
`;

const QuestionBodyTextarea = styled.textarea`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  min-height: 200px;
  color: white;
`;

const QuestionContainer = styled.div`
  background-color: #444;
  border-radius: 4px;
  margin-top: 20px;
  padding: 20px;
  &:not(:first-child) {
    margin-top: 10px;
  }
`;

const EditButton = styled.button`
  background-color: #777;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const QuestionTitle = styled.h3`
  padding-bottom: 10px;
`

const QuestionWord = styled.h2`
  margin: 15px 0;
  font-size: 20px;
`

export default function AskPage() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questions, setQuestions] = useState([]);

  const addQuestion = () => {
    const newQuestion = {
      title: questionTitle,
      body: questionBody,
    };

    setQuestions([...questions, newQuestion]);
    setQuestionTitle("");
    setQuestionBody("");
  };

  const editQuestion = (index) => {
    const editedQuestion = questions[index];
    setQuestionTitle(editedQuestion.title);
    setQuestionBody(editedQuestion.body);

    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  return (
    <Container>
      <Header1 style={{ marginBottom: "20px" }}>Ask a public question</Header1>
      <Input
        type="text"
        value={questionTitle}
        onChange={(e) => setQuestionTitle(e.target.value)}
        placeholder="Title of your question"
      />
      <QuestionBodyTextarea
        onChange={(e) => setQuestionBody(e.target.value)}
        placeholder="More info about your question"
        value={questionBody}
      />
      <BlueButton onClick={addQuestion}>Post question</BlueButton>

      {questions.length > 0 && (
        <div>
          <QuestionWord>Questions:</QuestionWord>
          {questions.map((q, index) => (
            <QuestionContainer key={index}>
              <QuestionTitle>{q.title}</QuestionTitle>
              <p>{q.body}</p>
              <EditButton onClick={() => editQuestion(index)}>Edit</EditButton>
            </QuestionContainer>
          ))}
        </div>
      )}
    </Container>
  );
}


