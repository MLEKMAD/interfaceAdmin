import React from "react";
import { useHistory } from "react-router-dom";
import image from "../../assets/images/illustrations/undraw_not_found.svg";

const PageNotFound = () => {
  const history = useHistory();
  return(
  <div className='empty'>
    <div className='empty-icon'>
      <img src={image} className='h-8 mb-4' alt='' />
    </div>
    <p className='empty-title h3'>404 Oops… You just found an error page</p>
    <p className='empty-subtitle text-muted'>
      We are sorry but the page you are looking for was not found
    </p>
    <div>
    <button
      type='submit'
      className='btn btn-block  btn-primary '
      onClick={() => {history.push("/dashbord");}}
    >
      Try again
    </button>
    </div>
  </div>
)
};

export default PageNotFound;
