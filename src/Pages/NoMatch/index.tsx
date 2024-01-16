import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {

  return (
    <div className="not-found">
      <h2>404: Page Not Found</h2>
      <Link to={'/'}>Go Home</Link>
    </div>
  );
}

export default NoMatch;
