import React from "react";
import image3 from "./homenav.jpg";
import "./Card.css"

export const Card = () => {
  return (
    <div className="card">

      <div className="image">
        <img src={image3} className="image3"></img>
      </div>

      <div className="content">
      A new high-severity vulnerability has been found in PaperCut software. Millions of people's healthcare files have been accessed by the Clop gang.
      </div>

    </div>
  );
};
