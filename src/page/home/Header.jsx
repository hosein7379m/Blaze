import React from "react";
import "./Header.css";

const Header = ({
  sideStatus,
  setSideStatus,
  menuStatus,
  setMenuStatus,
  CustomCat,
  setCustomCat,
}) => {
  return (
    <div className="Header">
      <div className="top-head">
        <span className={`side-handler`}>
          <button
            onClick={() => {
              setSideStatus(!sideStatus);
              if (menuStatus) {
                setMenuStatus(false);
              }
            }}
          >
            <i
              className={`fa-solid fa-bars ${sideStatus ? "turnArrow" : null}`}
            ></i>
          </button>
        </span>
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
      </div>
      <div className="header-cta">
        <h1>All Courses</h1>
        <div className="cta-btn">
          <button className="cta-btn-all" onClick={() => setCustomCat("All")}>All</button>
          <button onClick={() => setCustomCat("Favorite")}>Favorite</button>
          <button onClick={() => setCustomCat("Complete")}>Complete</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
