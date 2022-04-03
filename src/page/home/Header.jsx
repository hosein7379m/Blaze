import React from "react";
import "./Header.css";

const Header = ({ sideStatus }) => {
  return (
    <div className="Header">
      <div className="search-bar">
        <input
          type="text"
          name="searchBar"
          placeholder="Search..."
          spellCheck="false"
          autoComplete="off"
        />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="header-cta">
        <h1>All Courses</h1>
        <div className="cta-btn">
          <button>Favorite</button>
          <button>Complete</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
