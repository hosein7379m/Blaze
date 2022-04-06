import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../assets/css/DetailCourse.css";
import CourseService from "../Services/CourseService";
import toast, { Toaster } from "react-hot-toast";

const DetailCourse = () => {
  const navigate = useNavigate();
  const { courses } = useContext(AuthContext);
  const [allCourseDetail, setAllCourseDetail] = useState([]);
  const [currentDetail, setCurrentDetail] = useState(null);
  useEffect(() => {
    let isDone = true;
    if (isDone) {
      setAllCourseDetail(courses);
      allCourseDetail.filter((oneCourse) => {
        if (oneCourse.id === localStorage.getItem("courseID")) {
          setCurrentDetail(oneCourse);
        }
      });
    }
    /* clean up */
    return () => {
      isDone = false;
    };
  }, [courses, allCourseDetail]);
  const handleAdd = (e) => {
    const courseSelect = {
      username: localStorage.getItem("currUser"),
      courseID: e.target.name,
      favorite: false,
      complete: false,
    };
    if (courseSelect.courseID && courseSelect.username) {
      CourseService.add(courseSelect)
        .then((data) => {
          const { message } = data;
          toast.success(message.msgBody);
        })
        .catch((err) => console.log(err));
    }

    e.preventDefault();
  };
  const handleBack = () => {
    navigate("/course");
  };

  return (
    <div className="detail">
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
      <div className="detail-container">
        <div className="main-detail">
          <div className="detail-img">
            <img
              src={currentDetail ? currentDetail.image : null}
              alt={currentDetail ? currentDetail.image : null}
            />
          </div>
          <div className="detail-txt">
            <h1>{currentDetail ? currentDetail.name : null}</h1>
            <p>{currentDetail ? currentDetail.about : null}</p>
            <p>
              {" "}
              <b>Create by:</b> {currentDetail ? currentDetail.auther : null}
            </p>
            <span>
              <span className="detail-rate">
                <i className="fa-solid fa-star"></i>
                <p>{currentDetail ? currentDetail.rate : null}</p>
              </span>
              <span className="detail-language">
                <i className="fa-solid fa-globe"></i>
                <p>{currentDetail ? currentDetail.language : null}</p>
              </span>
            </span>
          </div>
        </div>
        <div className="additional-detail">
          <div>
            <h3>
              {" "}
              <b>Describtion:</b> {currentDetail ? currentDetail.describ : null}
            </h3>
          </div>
        </div>
      </div>
      <div className="detail-CTA">
        <div>
          <button className="cta-back" onClick={handleBack}>
            BACK
          </button>
          <button
            className="cta-add"
            onClick={handleAdd}
            name={currentDetail ? currentDetail.id : null}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCourse;
