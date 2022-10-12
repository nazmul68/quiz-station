import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import "./ErrorPage.css";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div id="error-page">
      <div className="icon mx-auto ">
        <FaceFrownIcon />
      </div>
      <div className="error-info">
        <h1 className="text-secondary">Oops!</h1>
        <p className="text-secondary">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-secondary">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>

      <Link className="text-danger" to={"/home"}>
        Please Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
