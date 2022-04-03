import React from "react";
import "./Menu.css";

const Menu = ({ menuStatus, setMenuStatus, sideStatus, setSideStatus }) => {
  return (
    <div
      className={`Menu ${menuStatus ? "menuOp" : null}`}
      style={{ opacity: `${sideStatus ? ".2" : "1"}` }}
    >
      <span className="menu-handler">
        <i
          onClick={() => {
            setMenuStatus(!menuStatus);
            if (sideStatus) {
              setSideStatus(false);
            }
          }}
          className="uil uil-apps"
        ></i>
      </span>
    </div>
  );
};

export default Menu;
