import React, { useContext } from "react";

import image1 from "../../assets/images/illustrations/undraw_people_search.svg";
import image2 from "../../assets/images/illustrations/undraw_hire_te5y.svg";
import { Link } from "react-router-dom";
import {  SettingsIcon } from "../components/icons";
import { AppContext } from "../../context/AppContext";

const HomePage = () => {

  return (
    <div className="row">
       <div
        className='empty  text-center  "col-md-6" '
        
      >
         <div className="empty-icon">
          <img src={image1} className="h-8 mb-4" alt="" />
        </div> 
        <p className="empty-title h3">You will see here Graphs</p>
      </div>

     
    </div>
  );
};

export default HomePage;
