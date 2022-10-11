import React from "react";
import { Container } from "react-bootstrap";

const QuizPracticePage = ({ quiz, questionData, idx }) => {
  const { id, options, correctAnswer, question } = questionData;
  const [option1, option2, option3, option4] = options;
  console.log(questionData);
  return (
    <Container className="w-75">
      <h4 className="text-start text-info">
        Quiz: <span className="text-danger">{idx + 1}</span>
      </h4>
      <div>
        <div className="card border-0 shadow-lg mb-5 ">
          <div className=" p-5">
            <h5 className="card-title">{question}</h5>
            <form>
              <div className="radio py-2">
                <label>
                  <input
                    type="radio"
                    value={option1}
                    name="quiz"
                    className="mx-2 "
                  />
                  {option1}
                </label>
              </div>
              <div className="radio py-2">
                <label>
                  <input
                    type="radio"
                    value={option2}
                    name="quiz"
                    className="mx-2 "
                  />
                  {option2}
                </label>
              </div>
              <div className="radio py-2">
                <label>
                  <input
                    type="radio"
                    value={option3}
                    name="quiz"
                    className="mx-2 "
                  />
                  {option3}
                </label>
              </div>
              <div className="radio py-2">
                <label>
                  <input
                    type="radio"
                    value={option4}
                    name="quiz"
                    className="mx-2 "
                  />
                  {option4 ? option4 : "none of the above"}
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default QuizPracticePage;
