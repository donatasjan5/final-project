import styled from "styled-components";

const QuestionStat = styled.div`
  text-align: center;
  font-size: 1.2rem;
  color: #aaa;
  margin-top: 6px;
  span {
    font-size: 0.7rem;
    display: block;
    margin-top: 4px;
  }
`;

const QuestionTitleArea = styled.div`
  padding: 0 30px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 5px;
  background-color: #3e4a52;
  color: #9cc3db;
  padding: 7px;
  border-radius: 4px;
  font-size: 1rem;
`;

const QuestionLink = styled.a`
  text-decoration: none;
  color: #2e81c9;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 5px;
`;

const StyledQuestionRow = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px 15px 10px;
  display: grid;
  grid-template-columns: repeat(3, 50px) 1fr;
  border-top: 1px solid #555;
`;

const WhoWhen =styled.div`
    display: inline-block;
    color: #aaa;
    font-size: 0.8rem;
    float: right;
    padding: 12px 0;
`

const UserLink = styled.a`
    color: #3ca4ff;
`

const QuestionRow = () => {
  return (
    <StyledQuestionRow>
      <QuestionStat>
        0 <span>votes</span>
      </QuestionStat>
      <QuestionStat>
        1 <span>answers</span>
      </QuestionStat>
      <QuestionStat>
        4 <span>views</span>
      </QuestionStat>
      <QuestionTitleArea>
        <QuestionLink>How to empty an array in JavaScript?</QuestionLink>
        <Tag>javascript</Tag>
        <Tag>parsing</Tag>
        <Tag>quotes</Tag>
        <Tag>literals</Tag>
        <WhoWhen>
            asked 3 mins ago <UserLink>Tom</UserLink>
        </WhoWhen>
      </QuestionTitleArea>
      </StyledQuestionRow>
  );
};

export default QuestionRow;