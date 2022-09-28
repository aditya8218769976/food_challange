import React from "react";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div>
      <div className="header-body">
        <h1>Welcome to Food's Kitchen</h1>
      </div>
      <div className="header-action">
        <Link to="/foodList">GO TO MENU</Link>
      </div>
    </div>
  );
}

export default Welcome;
