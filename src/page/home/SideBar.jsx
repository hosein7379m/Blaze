import React, { useEffect, useState } from "react";
import "./SideBar.css";
import Blaze from "../../image/BlazeBrand.ico";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SideBar = ({
  sideStatus,
  setSideStatus,
  menuStatus,
  setMenuStatus,
  width,
  firstName,
  lastName,
}) => {
  const navigate = useNavigate();
  const [isDropDown, setIsDropDown] = useState(false);

  const handleDeleteUser = async () => {
    const user = {
      username: localStorage.getItem("currUser"),
    };
    await axios
      .delete(`http://localhost:4000/user/deleteuser/${user.username}`)
      .then((data) => {
        if (data.data.success) {
          console.log(data.data.success);
          navigate("/");
        }
      });
  };
  // const handleLogOut = async () => {
  //   await axios.get(`http://localhost:4000/user/logout`).then((data) => {
  //     if (data.data.success) {
  //       console.log(data.data);
  //       console.log(data.data.success);
  //       navigate("/");
  //     }
  //   });
  // };

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
          <span className="side-join-cta" onClick={() => navigate("/course")}>
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
      <hr style={{ width: "50%", margin: "0 auto" }} />
      {/*  */}
      <div className={`account ${sideStatus ? "open" : "close"}`}>
        <h3>User</h3>
        <div className="account-info">
          <span className="user-icon">
            <p>first name:</p>
            <h2>{firstName}</h2>
            <p>last name:</p>
            <h2>{lastName}</h2>
          </span>
          <ul className={`drop-list`}>
            <li onClick={handleDeleteUser}>
              <p>Delete Account</p>
              <i className="uil uil-trash"></i>
            </li>
            {/* <li>
            <p>LogOut</p>
            <i className="uil uil-sign-out-alt"></i>
          </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
