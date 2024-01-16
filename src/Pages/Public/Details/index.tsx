import React from "react";
import { useParams } from "react-router";

function DetailsPage() {
  const { id } = useParams();

  return (
    <div className="home">
      <h2>Details {id}</h2>
    </div>
  );
}

export default DetailsPage;
