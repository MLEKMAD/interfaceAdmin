import React from "react";
import { withRouter } from "react-router-dom";

//import { AppContext } from "../../context/AppContext";

import Logo from "./Logo";

const NavBar = withRouter(({ history, location }) => {

  return (
    <nav
      className="navbar navbar-light navbar-secondary navbar-expand"
      id="navbar-secondary"
    >
      <div className="container">
        <Logo /> <h3 className="empty-title h2">Monitoring Application</h3>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            
          </li>
        </ul>
      </div>
    </nav>
  );
});

export default NavBar;
