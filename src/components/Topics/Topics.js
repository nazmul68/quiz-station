import React from "react";
import { Container } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

import "./Topics.css";

const Topics = () => {
  const topics = useLoaderData();
  const topicsArr = topics.data;
  // console.log(topicsArr);
  return (
    <div className="topics">
      <h2 className="my-3">Let's practice on your favourite topic...</h2>
      <Container className="my-5">
        <div className="row row-cols-1 row-cols-md-2 g-4 my-2 card-parent">
          {topicsArr.map((topic) => (
            <Topic key={topic.id} topic={topic}></Topic>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Topics;
