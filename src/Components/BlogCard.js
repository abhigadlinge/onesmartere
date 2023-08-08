import React from 'react'
import image4 from "./homenav.jpg";
import "./BlogCard.css"


export const BlogCard = () => {
  return (
    <div className='blogcard'>
        <div className='image4'> 
           <img src={image4}></img>
        </div>
        <div className='blogcontent'>
            <p>
            A new high-severity vulnerability has been found in PaperCut software. Millions of people's healthcare files have been accessed by the Clop gang.
            </p>
        </div>
    </div>
  )
}
