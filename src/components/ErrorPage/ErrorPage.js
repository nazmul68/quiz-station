import React from "react";
import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page">
      <div className="error-info">
        <p className="text-light d-xs-none d-sm-block d-md-none ">
          <i>{error.statusText || error.message} this page</i>
        </p>

        <Link className="text-light" to={"/home"}>
          Please Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
