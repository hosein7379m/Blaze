import React from "react";
import "./SideBar.css";
import Blaze from "../../image/BlazeBrand.ico";

const SideBar = ({ sideStatus, setSideStatus, menuStatus, setMenuStatus }) => {
  return (
    <div
      className={`SideBar ${sideStatus ? "SideOp" : "SideCl"} `}
      style={{ opacity: `${menuStatus ? ".2" : "1"}` }}
    >
      <span
        className="close-handler"
        style={{ opacity: `${sideStatus ? "1" : "0"}` }}
      >
        <i
          className="fa-solid fa-xmark"
          onClick={() => {
            setSideStatus(false);
          }}
        ></i>
      </span>
      <div className={`side-container`}>
        <span
          className={`side-header`}
          style={{ opacity: `${sideStatus ? "1" : "0"}` }}
        >
          <img src={Blaze} />
          <h1>Blaze</h1>
        </span>
        <div
          style={{ opacity: `${sideStatus ? "1" : "0"}` }}
          className={`side-btn`}
        >
          <span className="side-join-cta">
            <button>Join a course</button>
          </span>
          <span className="side-all-cta">
            <i className="fa-solid fa-border-all"></i>
            <button>All Course</button>
          </span>
          <span className="side-chat-cta">
            <i className="fa-regular fa-message"></i>
            <button>Chat</button>
          </span>
          <span className="side-setting-cta">
            <i className="fa-solid fa-gear"></i>
            <button>Setting</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
