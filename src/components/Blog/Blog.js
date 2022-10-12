import React from "react";
import "./Blog.css";
import developerImg from "../../images/developer.jpg";
import { Container } from "react-bootstrap";
import QuestionAns from "../QuestionAns/QuestionAns";

const Blog = () => {
  return (
    <div>
      <h1 className="mt-3 mb-5 fw-bold bolg-page-caption ">
        Welcome to Quiz Station Blog Page...
      </h1>
      <Container className="w-75 mx-auto">
        <div className="my-5 d-md-flex justify-content-between align-items-center">
          <div className="developer-info">
            <h3 className="text-start">Hello, I am Nazmul Sujon</h3>
            <p className="w-75 text-md-start">
              A web developer from Bangladesh, working on <b>Quiz Station</b>{" "}
              especially user exprience & blog page section.
            </p>
          </div>
          <div className="developer-img">
            <img src={developerImg} alt="" />
          </div>
        </div>
      </Container>
      <QuestionAns></QuestionAns>
    </div>
  );
};

export default Blog;
