import React from "react";
import { FaceFrownIcon } from "@heroicons/react/24/solid";

const UnPreparedMsgPage = () => {
  return (
    <div>
      <div className="icon mx-auto ">
        <FaceFrownIcon />
      </div>
      <div className="d-flex justify-content-center">
        <div className="opps-msg">
          <h6>Opps! we are extreamly sorry</h6>
          <p>
            <small>
              {" "}
              We are already working on it, Stay connected with us.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnPreparedMsgPage;
