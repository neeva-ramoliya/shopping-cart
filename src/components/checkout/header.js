import React from "react";
import { Link } from "react-router-dom";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

const Header = props => {
  return (
    <div className="header">
      <Link to={"/"} className="text-decoration-none">
        <ChevronLeft />
        <span className="icon-text title text-secondary">
          {`Order Summary`}
        </span>
      </Link>

      <div className="seperator" />
    </div>
  );
};

export default Header;
