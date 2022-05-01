import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../components/Sidebar";
import SingleCourse from "../components/SingleCourse";
import "../assets/css/coursePick.css";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
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
        toast.error("You must select at least one course");
      } else {
        navigate("/home");
        window.location.reload();
      }
    });
  };
  const handleGuid1 = () => {
    toast(
      (t) => (
        <span className="guid-content">
          <h1>Step-1</h1>
          <p>
            In this step you have to select the courses you want to take and add
            them to your user panel.
          </p>
          <button
            onClick={() => {
              toast.dismiss(t.id);
            }}
          >
            Ok
          </button>
        </span>
      ),
      {
        style: {
          padding: "0",
        },
      }
    );
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
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "1.3rem",
            fontWeight: "600",
          },
        }}
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
          <h2>
            Choose your favorite courses{" "}
            <i
              onClick={handleGuid1}
              className="fa-regular fa-circle-question coursePickguid"
            ></i>{" "}
          </h2>

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
                  language={course.language}
                  addedCourse={addedCourse}
                  setAddedCourse={setAddedCourse}
                />
              );
            })}
        </section>
        <section className="footer-singleCourse">
          <button onClick={handleStartTutorial}>Start Tutorial</button>
        </section>
      </main>
    </div>
  );
};

export default CoursePick;
