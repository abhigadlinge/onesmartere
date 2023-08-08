import React from "react";
import image2 from "./home.png"
import "./Home.css"
import { Card } from "./Card";

export const Home = () => {
  return (
    <div>
      <div className="home">

        <div className="lefthome">
            <img src={image2} className="image2"></img>
             <p className="para">A new high-severity vulnerability has been 
             found in PaperCut software. Millions of people's healthcare files have been 
             accessed by the Clop gang. Malicious apps are using a sneaky versioning</p>
        </div>

        <div className="righthome">
           <Card />
           <Card />
           <Card />
           
        </div>

      </div>
    </div>
  );
};
