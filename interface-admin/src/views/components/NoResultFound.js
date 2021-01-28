import React from "react";
import { useHistory } from "react-router-dom";
import image from "../../assets/images/illustrations/undraw_no_result_found.svg";

const NoResultFound = () => {
  
 
  return(
  <div className='container empty'>
    <div className='empty-icon'>
      <img src={image} className='h-8 mb-4' alt='' />
    </div>
    <p className='empty-title h3'>
     Your machine is down or it takes so much time to respond
    </p>
    <p className='empty-subtitle text-muted'>
      Check your machine and try again
    </p>
    <div>
    
    </div>

  </div>
  )};

export default NoResultFound;
