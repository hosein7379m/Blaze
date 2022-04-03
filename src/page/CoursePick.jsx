import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";
import SingleCourse from "../components/SingleCourse";
import "../assets/css/coursePick.css";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import CourseService from "../Services/CourseService";

const CoursePick = () => {
  const navigate = useNavigate();
  const { user, courses } = useContext(AuthContext);

  const [sideStatus, setSideStatus] = useState(false);
  /* divie course in each category hook state */
  const [allCourse, setAllCourse] = useState([]);
  const [web, setWeb] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [it, setIt] = useState([]);
  /*  */
  const [selectedCourse, setSelectedCourse] = useState([]);
  /*  */
  const [addedCourse, setAddedCourse] = useState([]);
  /* screen sidth */
  const [currCategory, setCurrCategory] = useState("");
  const width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  /* useEffect for filter all course by category */
  useEffect(() => {
    let isDone = true;
    if (isDone) {
      setAllCourse(courses);
      if (allCourse) {
        allCourse.forEach((category) => {
          if (category.title === "web") {
            setWeb((prevValue) => {
              return [...prevValue, category];
            });
          } else if (category.title === "mobile") {
            setMobile((prevValue) => {
              return [...prevValue, category];
            });
          } else if (category.title === "IT") {
            setIt((prevValue) => {
              return [...prevValue, category];
            });
          }
        });
      }
      /*  */
    }

    return () => {
      isDone = false;
    };
  }, [allCourse, courses]);
  /* course route */
  const handleStartTutorial = (e) => {
    e.preventDefault();
    const user = {
      username: localStorage.getItem("currUser"),
    };
    CourseService.findAll(user).then((data) => {
      const { courses, message } = data;
      setSelectedCourse(courses);
      if (!message.hasCourse) {
        swal({
          title: "ERROR",
          text: "You must select at least one course",
          icon: "error",
          button: "OK",
          className: "error-alert",
        });
      } else {
        navigate("/home");
      }
    });
  };

  return (
    <div className="main-course">
      <Sidebar
        sideStatus={sideStatus}
        setSideStatus={setSideStatus}
        currCategory={currCategory}
        setCurrCategory={setCurrCategory}
        username={user}
      />
      <main
        className={`courseList`}
        style={{ opacity: `${sideStatus && width < 700 ? "0.5" : "1"}` }}
      >
        <section className="about-header">
          <div className="humb-menu">
            <i
              className="fa-solid fa-bars"
              style={{ opacity: `${sideStatus && width < 700 ? "0" : "1"}` }}
              onClick={() => setSideStatus(!sideStatus)}
            ></i>
          </div>
          <div className="blaze-logo">
            <h1>Blaze</h1>
          </div>
        </section>
        <section className="courses-list">
          <h2>Choose your favorite courses</h2>
          {allCourse
            .filter((cat) => {
              if (currCategory) {
                if (cat.title === currCategory) {
                  return cat;
                } else if (cat.title === currCategory) {
                  return cat;
                } else if (cat.title === currCategory) {
                  return cat;
                }
              } else {
                return cat;
              }
            })
            .map((course) => {
              return (
                <SingleCourse
                  key={course.id}
                  id={course.id}
                  name={course.name}
                  auther={course.auther}
                  about={course.about}
                  rate={course.rate}
                  image={course.image}
                  addedCourse={addedCourse}
                  setAddedCourse={setAddedCourse}
                />
              );
            })}
        </section>
        <section className="footer-singleCourse">
          <div>
            <button onClick={handleStartTutorial}>Start Tutorial</button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CoursePick;
