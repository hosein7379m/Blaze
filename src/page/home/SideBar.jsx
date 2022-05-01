import React, { useEffect } from "react";
import "./SideBar.css";
import Blaze from "../../image/BlazeBrand.ico";

const SideBar = ({
  sideStatus,
  setSideStatus,
  menuStatus,
  setMenuStatus,
  width,
}) => {
  return (
    <div
      className={`SideBar ${sideStatus ? "SideOp" : "SideCl"} `}
      style={{ opacity: `${menuStatus && width < 700 ? ".2" : "1"}` }}
    >
      <span className={`close-handler ${sideStatus ? "open" : "close"}`}>
        <i
          className="fa-solid fa-xmark"
          onClick={() => {
            setSideStatus(false);
          }}
        ></i>
      </span>
      <div className={`side-container ${sideStatus ? "open" : "close"}`}>
        <span className={`side-header`}>
          <img src={Blaze} />
          <h1>Blaze</h1>
        </span>
        <div className={`side-btn`}>
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
          <span className="side-developer-cta">
            <i className="uil uil-arrow"></i>
            <button>Developer</button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
