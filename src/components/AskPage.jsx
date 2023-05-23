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

const ActionButton = styled.button`
  background-color: ${(props) => (props.delete ? "red" : "#777")};
  color: white;
  border: none;
  border-radius: 3px;
  padding: 8px 16px;
  margin-top: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

const CommentInput = styled.input`
  background: none;
  border: 1px solid #777;
  border-radius: 3px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  margin-top: 10px;
  color: white;
`;

const CommentContainer = styled.div`
  background-color: #666;
  border-radius: 4px;
  margin-top: 10px;
  padding: 10px;
`;

export default function AskPage() {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questions, setQuestions] = useState([]);
  const [comment, setComment] = useState("");
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedComment, setEditedComment] = useState("");
  const [editedQuestionTitle, setEditedQuestionTitle] = useState("");
  const [editedQuestionBody, setEditedQuestionBody] = useState("");
  const [filterKeyword, setFilterKeyword] = useState("");
  const [filterByCommented, setFilterByCommented] = useState(false);

  const addQuestion = () => {
    const newQuestion = {
      title: questionTitle,
      body: questionBody,
      likes: 0,
      dislikes: 0,
      comments: [],
      commented: false,
    };

    setQuestions([...questions, newQuestion]);
    setQuestionTitle("");
    setQuestionBody("");

    saveQuestionToDb(newQuestion);
  };

  const editItem = (index) => {
    setEditedIndex(index);
    const editedQuestion = questions[index];
    setEditedQuestionTitle(editedQuestion.title);
    setEditedQuestionBody(editedQuestion.body);
  };

  const saveQuestionToDb = async (questionData) => {
    try {
      const response = await fetch("http://localhost:8000/question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionData),
      });

      if (response.ok) {
        console.log("Question saved successfully");
      } else {
        throw new Error("Failed to save question");
      }
    } catch (error) {
      console.error("Failed:", error.message);
    }
  };

  const deleteItem = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const addItemComment = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].comments.push({
      body: comment,
      likes: 0,
      dislikes: 0,
    });
    updatedQuestions[questionIndex].commented = true;
    setQuestions(updatedQuestions);
    setComment("");
  };

  const editComment = (questionIndex, commentIndex) => {
    setEditedIndex(`${questionIndex}_${commentIndex}`);
    setEditedComment(questions[questionIndex].comments[commentIndex].body);
  };

  const saveEditedComment = (questionIndex, commentIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].comments[commentIndex].body = editedComment;
    setQuestions(updatedQuestions);
    setEditedIndex(null);
    setEditedComment("");
  };

  const cancelEditComment = () => {
    setEditedIndex(null);
    setEditedComment("");
  };

  const deleteComment = (questionIndex, commentIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].comments.splice(commentIndex, 1);
    setQuestions(updatedQuestions);
  };

  const likeQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].likes += 1;
    setQuestions(updatedQuestions);
  };

  const dislikeQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].dislikes += 1;
    setQuestions(updatedQuestions);
  };

  const likeComment = (questionIndex, commentIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].comments[commentIndex].likes += 1;
    setQuestions(updatedQuestions);
  };

  const dislikeComment = (questionIndex, commentIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].comments[commentIndex].dislikes += 1;
    setQuestions(updatedQuestions);
  };

  const saveEditedQuestion = (questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].title = editedQuestionTitle;
    updatedQuestions[questionIndex].body = editedQuestionBody;
    setQuestions(updatedQuestions);
    setEditedIndex(null);
    setEditedQuestionTitle("");
    setEditedQuestionBody("");
  };

  const cancelEditQuestion = () => {
    setEditedIndex(null);
    setEditedQuestionTitle("");
    setEditedQuestionBody("");
  };

  const filterQuestions = () => {
    let filteredQuestions = questions.filter((question) =>
      question.title.toLowerCase().includes(filterKeyword.toLowerCase())
    );

    if (filterByCommented) {
      filteredQuestions = filteredQuestions.filter(
        (question) => question.commented
      );
    }

    return filteredQuestions;
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
      <BlueButton onClick={addQuestion}>Ask question</BlueButton>

      <div>
        <Input
          type="text"
          value={filterKeyword}
          onChange={(e) => setFilterKeyword(e.target.value)}
          placeholder="Filter by keyword"
        />
        <label htmlFor="commented">
          <input
            id="commented"
            type="checkbox"
            checked={filterByCommented}
            onChange={(e) => setFilterByCommented(e.target.checked)}
          />
          Show commented questions
        </label>
      </div>

      {filterQuestions().map((question, index) => (
        <QuestionContainer key={index}>
          <h3>{question.title}</h3>
          <p>{question.body}</p>
          <p>
            Likes: {question.likes} | Dislikes: {question.dislikes}
          </p>
          <ActionButton onClick={() => deleteItem(index)} delete>
            Delete
          </ActionButton>
          <ActionButton onClick={() => likeQuestion(index)}>
            Like
          </ActionButton>
          <ActionButton onClick={() => dislikeQuestion(index)}>
            Dislike
          </ActionButton>
          {editedIndex === index ? (
            <div>
              <Input
                type="text"
                value={editedQuestionTitle}
                onChange={(e) => setEditedQuestionTitle(e.target.value)}
                placeholder="Title of your question"
              />
              <QuestionBodyTextarea
                onChange={(e) => setEditedQuestionBody(e.target.value)}
                placeholder="More info about your question"
                value={editedQuestionBody}
              />
              <BlueButton onClick={() => saveEditedQuestion(index)}>
                Save
              </BlueButton>
              <BlueButton onClick={cancelEditQuestion}>Cancel</BlueButton>
            </div>
          ) : (
            <ActionButton onClick={() => editItem(index)}>Edit</ActionButton>
          )}

          <CommentInput
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
          />
          <BlueButton onClick={() => addItemComment(index)}>
            Add comment
          </BlueButton>

          {question.comments.map((comment, commentIndex) => (
            <CommentContainer key={commentIndex}>
              <p>{comment.body}</p>
              <p>
                Likes: {comment.likes} | Dislikes: {comment.dislikes}
              </p>
              <ActionButton onClick={() => deleteComment(index, commentIndex)} delete>
                Delete
              </ActionButton>
              <ActionButton onClick={() => likeComment(index, commentIndex)}>
                Like
              </ActionButton>
              <ActionButton onClick={() => dislikeComment(index, commentIndex)}>
                Dislike
              </ActionButton>
              {editedIndex === `${index}_${commentIndex}` ? (
                <div>
                  <CommentInput
                    type="text"
                    value={editedComment}
                    onChange={(e) => setEditedComment(e.target.value)}
                    placeholder="Add a comment"
                  />
                  <BlueButton
                    onClick={() => saveEditedComment(index, commentIndex)}
                  >
                    Save
                  </BlueButton>
                  <BlueButton onClick={cancelEditComment}>Cancel</BlueButton>
                </div>
              ) : (
                <ActionButton onClick={() => editComment(index, commentIndex)}>
                  Edit
                </ActionButton>
              )}
            </CommentContainer>
          ))}
        </QuestionContainer>
      ))}
    </Container>
  );
}