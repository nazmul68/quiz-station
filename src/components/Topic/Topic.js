import React from "react";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { name, logo, total } = topic;
  console.log(topic);
  return (
    <div className="col">
      <div className="card border-0 shadow-lg w-75 mx-auto bg-dark text-light">
        <img src={logo} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <div className="d-flex d-flex justify-content-between align-items-center p-2">
            <h4 className="card-title">{name}</h4>
            <h6 className="card-text ">
              Quiz: <span className="text-danger">{total}</span>
            </h6>
            <button className="btn btn-primary">Let's practice</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
