import React, { useState, useEffect, useContext } from "react";
import SideBar from "./SideBar";
import Menu from "./Menu";
import Header from "./Header";
import StartedCourse from "./StartedCourse";
import "./Home.css";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import AuthService from "../../Services/AuthService";

const Home = () => {
  const { selectedCourses, courses } = useContext(AuthContext);
  /*  */
  const [sideStatus, setSideStatus] = useState(false);
  const [menuStatus, setMenuStatus] = useState(false);
  const [serverCourse, setServerCourse] = useState([]);
  const [allCourse, setAllCourse] = useState([]);
  const [consoleCourse, setConsoleCourse] = useState([]);
  const [CustomCat, setCustomCat] = useState("All");

  const [userinfo, setUSerInfo] = useState({
    fName: "",
    lName: "",
  });
  /*  */
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  /*  */
  const resize = () => {
    let currWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    if (currWidth >= 701) {
      setSideStatus(true);
    }
  };
  /*  */
  useEffect(() => {
    window.onresize = resize;
    /*  */
    let isDone = true;
    if (isDone) {
      setAllCourse(selectedCourses);
      setServerCourse(courses);
    }

    if (allCourse) {
      fillterAllCouese();
    }

    /* reccive fname and lname current user */
    const user = {
      username: localStorage.getItem("currUser"),
    };
    AuthService.userInfo(user).then((data) => {
      setUSerInfo({
        fName: data.userinfo.firstName,
        lName: data.userinfo.lastName,
      });
    });
    /*  */
    return () => {
      isDone = false;
    };
  }, [selectedCourses, allCourse]);
  /*  */
  const fillterAllCouese = () => {
    allCourse.map((seleCourse) => {
      serverCourse.map((checkCourse) => {
        if (seleCourse.courseID === checkCourse.id) {
          setConsoleCourse((prevValue) => {
            return [...prevValue, seleCourse];
          });
        }
      });
    });
  };

  return (
    <div className="Home">
      <section className={`home-container`}>
        <SideBar
          sideStatus={sideStatus}
          setSideStatus={setSideStatus}
          menuStatus={menuStatus}
          setMenuStatus={setMenuStatus}
          width={width}
        />
        <div className={`main-content ${sideStatus ? "SideOpen" : null}`}>
          <Header
            sideStatus={sideStatus}
            setSideStatus={setSideStatus}
            menuStatus={menuStatus}
            setMenuStatus={setMenuStatus}
            CustomCat={CustomCat}
            setCustomCat={setCustomCat}
          />
          <section className="content-course">
            {consoleCourse
              .filter((couCat) => {
                if (CustomCat === "All") {
                  return couCat;
                } else if (CustomCat === "Favorite" && couCat.favorite) {
                  return couCat;
                } else if (CustomCat === "Complete" && couCat.complete) {
                  return couCat;
                }
              })
              .map((course) => {
                return (
                  <StartedCourse
                    key={course.id}
                    ID={course._id}
                    name={course.name}
                    image={course.image}
                    language={course.language}
                    favorite={course.favorite}
                    complete={course.complete}
                  />
                );
              })}
          </section>
        </div>
      </section>
      <Menu
        menuStatus={menuStatus}
        setMenuStatus={setMenuStatus}
        sideStatus={sideStatus}
        setSideStatus={setSideStatus}
        width={width}
        firstName={userinfo.fName}
        lastName={userinfo.lName.substring(0, 7)}
      />
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

export default Home;
