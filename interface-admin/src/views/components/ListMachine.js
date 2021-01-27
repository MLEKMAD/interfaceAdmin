import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const UserListItem = ({ machine, subTitle }) => {
  const handleOnClick = () => {
    machine.username == "All The machines"
      ? localStorage.setItem("currentMachine", null)
      : localStorage.setItem("currentMachine", JSON.stringify(machine));
  };
  const handleButton = () => {
    localStorage.setItem("toBeDeleted", JSON.stringify(machine));
  };
  return (
    <Fragment>
      <div className='list-item '>
        <div className='row row-cards row-deck'>
          <div className='text-truncate'>
            <Link
              onClick={handleOnClick}
              to={"/dashbord"}
              className='text-body d-block'
            >
              {`${machine.username}`}
            </Link>
            <small className='d-block text-muted text-truncate mt-n1'>
              {`${machine["ip_address"]}`}
            </small>
          </div>
        </div>
        <div className='col col-md-4 mx-auto'>
          <div>
            {" "}
            <button
              style={{ height: "18px" }}
              type='button'
              className='btn btn-sm m-3 btn-outline-danger'
              onClick={handleButton}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserListItem;
