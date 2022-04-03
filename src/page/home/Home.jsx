import React, { useState } from "react";
import SideBar from "./SideBar";
import Menu from "./Menu";
import Header from "./Header";
import StartedCourse from "./StartedCourse";
import "./Home.css";

const Home = () => {
  const [sideStatus, setSideStatus] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className="Home">
      <section className={`home-container`}>
        <SideBar
          sideStatus={sideStatus}
          setSideStatus={setSideStatus}
          menuStatus={menuStatus}
          setMenuStatus={setMenuStatus}
        />
        <div
          style={{ opacity: `${sideStatus || menuStatus ? ".2" : "1"}` }}
          className={`main-content ${sideStatus ? "SideOpen" : null}`}
        >
          <Header sideStatus={sideStatus} />
          <StartedCourse />
        </div>
      </section>
      <Menu
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
        sideStatus={sideStatus}
        setSideStatus={setSideStatus}
      />
    </div>
  );
};

export default Home;
