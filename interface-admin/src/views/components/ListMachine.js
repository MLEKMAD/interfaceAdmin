import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const UserListItem = ({ machine }) => {
  return (
    <Fragment>
      <div className="list-item ">
        <div className="text-truncate">
          <Link to={"/dashbord/" + machine} className="text-body d-block">
            {`${machine}`}
          </Link>
          {/* <small className="d-block text-muted text-truncate mt-n1">
            {subTitle}
          </small> */}
        </div>
      </div>
    </Fragment>
  );
};

export default UserListItem;