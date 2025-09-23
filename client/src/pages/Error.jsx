import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

import React from "react";

function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Page Not Found</h3>
        <p>The page you’re looking for doesn’t exist or has been moved.</p>

        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
}

export default Error;
