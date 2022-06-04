import React, { useState, useContext, useEffect } from "react";
import "../assets/css/singleCourse.css";
import { AuthContext } from "../Context/AuthContext";
import CourseService from "../Services/CourseService";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const SingleCourse = ({
  id,
  name,
  about,
  auther,
  image,
  rate,
  language,
  setAddedCourse,
}) => {
  const { detailCourseId, setDetailCourseeId } = useContext(AuthContext);
  const [courseForAdd, setCourseForAdd] = useState({
    username: "",
    courseID: "",
    name: "",
    language: "",
    image: "",
    favorite: false,
    complete: false,
  });
  const [hasCourse, setHasCourse] = useState(false);
  /*  */
  const showDetailtHandle = (e) => {
    setDetailCourseeId(e.target.name);
    localStorage.setItem("courseID", e.target.name);
  };
  /*  */
  const addCourseHandler = (e) => {
    setCourseForAdd({
      username: localStorage.getItem("currUser"),
      courseID: e.target.name,
      name: e.target.title,
      language: e.target.id,
      image: e.target.className,
      favorite: false,
      complete: false,
    });
    /*  */
    const courseSelect = {
      username: localStorage.getItem("currUser"),
      courseID: e.target.name,
      name: e.target.title,
      language: e.target.id,
      image: e.target.className,
      favorite: false,
      complete: false,
    };
    if (
      courseSelect.courseID &&
      courseSelect.username &&
      courseSelect.name &&
      courseSelect.language &&
      courseSelect.image
    ) {
      CourseService.add(courseSelect)
        .then((data) => {
          const { message } = data;
          setHasCourse(!hasCourse);
          toast(message.msgBody);
          setAddedCourse((prevValue) => {
            return [...prevValue, data];
          });
        })
        .catch((err) => console.log(err));
    }

    e.preventDefault();
  };
  // const deleteCourseHandler = (e) => {
  //   /*  */
  //   console.log("hazf shod");

  //   /* delete course from db */
  //   const _id = e.target.name;
  //   axios
  //     .delete(`https://serverblaze.herokuapp.com/usercourse/delete/${_id}`)
  //     .then((data) => console.log(data));

  //   e.preventDefault();
  // };

  useEffect(() => {
    let isDone = true;
    if (isDone) {
    }
    return () => {
      isDone = false;
    };
  }, [courseForAdd]);

  return (
    <div className={`singleCourse`}>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            padding: "16px",
            fontSize: "1.3rem",
            fontWeight: "600",
            fontFamily: "Montserrat, sans-serif",
          },
        }}
      />
      <div className={`course-container `}>
        <div className="main-info">
          <div className="info-course">
            <span className="course-img">
              <img src={image} alt={image} />
            </span>
            <div className="auther-info">
              <h2>{name}</h2>
              <p>Create by: {auther}</p>
              <span>
                <i className="fa-solid fa-star"></i>
                <p>{rate}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="additional-info">
          <h6>{about}</h6>
          <div className={`CTA-course ${hasCourse ? "DeleteBtn" : "AddBtn"}`}>
            <button
              onClick={addCourseHandler}
              name={id}
              title={name}
              id={language}
              className={image}
            >
              Add
            </button>
            <p>
              Describtion:{" "}
              <a href={`detail`} name={id} onClick={showDetailtHandle}>
                Learn More...
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
