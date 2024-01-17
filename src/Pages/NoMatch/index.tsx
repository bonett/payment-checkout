import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <>
      <div className="container">
        <div className="not-found">
          <h2 className="not-found_title">Page Not Found</h2>
          <Link to={"/"}>Go Home</Link>
        </div>
      </div>
    </>
  );
}

export default NoMatch;
