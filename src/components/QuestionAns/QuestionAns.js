import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./QuestionAns.css";

const QuestionAns = () => {
  return (
    <div>
      <Container className="mt-5 w-75 py-5">
        <h2 className="question text-start my-3">
          * What are the main perposes of React Router? *
        </h2>
        <p className="text-start fs-5">
          React Router is a standard library for routing in React. It enables
          the navigation among views of various components in a React
          Application. React Router is a state container for the current
          location , or URL. It keeps track of the location and renders
          different <b>Route's</b> as it changes, and it also gives you tools to
          update the location using <b>Link</b> and the history API.
        </p>
      </Container>
      <Container className="mt-5 w-75">
        <h2 className="question text-start my-3">
          * How does Context API work? *
        </h2>
        <p className="text-start fs-5">
          Context is a built-in API introduced in React 16.3 . The React Context
          API is a way for a React app to effectively produce global variables
          that can be passed around. This is the alternative to "prop drilling"
          or moving props from grandparent to child to parent, and so on.Context
          provides a way to pass data or state through the component tree
          without having to pass props down manually through each nested
          component.
        </p>
      </Container>
      <Container className="mt-5 w-75 pt-5">
        <h2 className="question text-start my-3">
          * How does useRef() actually work? *
        </h2>
        <p className="text-start fs-5">
          useRef() hook creates references. Calling const reference =
          useRef(initialValue) with the initial value returns a special object
          named reference. The reference object has a property current : We can
          use this property to read the reference value reference. current , or
          update reference.
        </p>
      </Container>
      <Button varriant="primary" className="my-5">
        <Link
          to={"/opps"}
          className="text-light fw-semibold text-decoration-none"
        >
          see more
        </Link>
      </Button>
    </div>
  );
};

export default QuestionAns;
