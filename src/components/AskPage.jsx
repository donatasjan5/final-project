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

  const addQuestion = () => {
    const newQuestion = {
      title: questionTitle,
      body: questionBody,
      likes: 0, // added likes field
      dislikes: 0, // added dislikes field
      comments: [],
    };

    setQuestions([...questions, newQuestion]);
    setQuestionTitle("");
    setQuestionBody("");
  };

  const editItem = (index) => {
    setEditedIndex(index);
    const editedQuestion = questions[index];
    setQuestionTitle(editedQuestion.title);
    setQuestionBody(editedQuestion.body);
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
      likes: 0, // added likes field for comments
      dislikes: 0, // added dislikes field for comments
    });
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
          <h2>Questions:</h2>
          {questions.map((q, questionIndex) => (
            <QuestionContainer key={questionIndex}>
              <h3>
                {q.title}
                {editedIndex === questionIndex && " (edited)"}
              </h3>
              <p>{q.body}</p>
              <ActionButton onClick={() => likeQuestion(questionIndex)}>
                Like ({q.likes})
              </ActionButton>
              <ActionButton onClick={() => dislikeQuestion(questionIndex)}>
                Dislike ({q.dislikes})
              </ActionButton>
              <ActionButton onClick={() => editItem(questionIndex)}>
                Edit
              </ActionButton>
              <ActionButton
                delete
                onClick={() => deleteItem(questionIndex)}
              >
                Delete
              </ActionButton>
              <CommentInput
                type="text"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Add a comment"
              />
              <BlueButton
                onClick={() => addItemComment(questionIndex)}
                disabled={!comment}
              >
                Add Comment
              </BlueButton>
              {q.comments.length > 0 && (
                <div>
                  <h4>Comments:</h4>
                  {q.comments.map((comment, commentIndex) => (
                    <CommentContainer key={commentIndex}>
                      {editedIndex === `${questionIndex}_${commentIndex}` ? (
                        <>
                          <CommentInput
                            type="text"
                            value={editedComment}
                            onChange={(e) => setEditedComment(e.target.value)}
                            placeholder="Edit the comment"
                          />
                          <ActionButton
                            onClick={() =>
                              saveEditedComment(questionIndex, commentIndex)
                            }
                          >
                            Save
                          </ActionButton>
                          <ActionButton delete onClick={cancelEditComment}>
                            Cancel
                          </ActionButton>
                        </>
                      ) : (
                        <>
                          <p>{comment.body}</p>
                          <ActionButton
                            onClick={() =>
                              likeComment(questionIndex, commentIndex)
                            }
                          >
                            Like ({comment.likes})
                          </ActionButton>
                          <ActionButton
                            onClick={() =>
                              dislikeComment(questionIndex, commentIndex)
                            }
                          >
                            Dislike ({comment.dislikes})
                          </ActionButton>
                          <ActionButton
                            onClick={() =>
                              editComment(questionIndex, commentIndex)
                            }
                          >
                            Edit
                          </ActionButton>
                          <ActionButton
                            delete
                            onClick={() =>
                              deleteComment(questionIndex, commentIndex)
                            }
                          >
                            Delete
                          </ActionButton>
                        </>
                      )}
                    </CommentContainer>
                  ))}
                </div>
              )}
            </QuestionContainer>
          ))}
        </div>
      )}
    </Container>
  );
}
