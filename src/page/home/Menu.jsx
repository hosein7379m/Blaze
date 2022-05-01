import React, { useState } from "react";
import "./Menu.css";

const Menu = ({
  menuStatus,
  setMenuStatus,
  sideStatus,
  setSideStatus,
  width,
  firstName,
  lastName,
}) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const handleEditUser = () => {};
  return (
    <div
      className={`Menu ${menuStatus ? "menuOp" : null} ${
        sideStatus ? "openMenu" : null
      }`}
    >
      <section className="menu-content">
        <div className="account">
          <div className="account-info" onClick={handleEditUser}>
            <span className="user-icon">
              <i className="fa-solid fa-user"></i>
              <h2>{firstName} {lastName}</h2>
            </span>
            <span
              className={`user-handler ${isDropDown ? "dropOpen" : null}`}
              onClick={() => setIsDropDown(!isDropDown)}
            >
              <i className="uil uil-angle-down"></i>
            </span>
          </div>
          <ul className={`drop-list ${isDropDown ? "menuOpen" : null}`}>
            <li>
              <p>Edit User</p>
              <i className="uil uil-edit"></i>
            </li>
            <li>
              <p>LogOut</p>
              <i className="uil uil-sign-out-alt"></i>
            </li>
          </ul>
        </div>
        <div className="status-info">
          <div className="progress">
            <span className="progress-info">
              <i className="uil uil-chart"></i>
              <p>progress</p>
            </span>
            <div className="progress-bar">
              <span className="bar-line"></span>
            </div>
          </div>
          <div className="upcoming-task">
            <span className="upcoming-info">
              <i className="uil uil-layer-group"></i>
              <p>upcoming task</p>
            </span>
            <div className="upcoming-bar">
              <span className="bar-line" style={{ width: "30%" }}></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
