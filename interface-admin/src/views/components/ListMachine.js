import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const UserListItem = ({ machine, subTitle }) => {
    const handleOnClick = () => {
       (machine.username == "All The machines") ? localStorage.setItem("currentMachine", null) :  localStorage.setItem('currentMachine', JSON.stringify(machine));;
    }
  return (
    <Fragment>
      <div className="list-item ">
        <div className="text-truncate">
          <Link onClick={handleOnClick} to={"/"} className="text-body d-block">
            {`${machine.username}`}
          </Link>
          <small className="d-block text-muted text-truncate mt-n1">
            {machine.ip_adrress}
          </small> 
        </div>
      </div>
    </Fragment>
  );
};

export default UserListItem;