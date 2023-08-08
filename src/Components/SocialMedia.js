import React from "react";
import { FaPhone } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import  "./SocialMedia.css"


export const SocialMedia = () => {
  return (
    <div>
      <div className="header">

        <div className="leftheader">
          <h1 className="head"> follow us: </h1>
          <h1 className="head"> <FaFacebook/> </h1>
          <h1 className="head"> <FaLinkedin/> </h1>
          <h1 className="head"> <FaGoogle/> </h1>
          <h1 className="head"> <FaInstagram/> </h1>
        </div>

        <div className="rightheader">
          <h1 className="head"><FaPhone/></h1>
          <h1 className="head">7058784019</h1>
        </div>
        
      </div>
    </div>
  );
};
