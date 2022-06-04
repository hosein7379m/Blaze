import React, { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";
import axios from "axios";
import CourseService from "../Services/CourseService";

import "../assets/css/loadbar.css";

export const AuthContext = createContext();

export default ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [courses, setCourses] = useState([]);
  const [userCourse, setUserCourse] = useState(null);
  const [webCourse, setWebCourse] = useState(null);
  const [mobileCourse, setMobileCourse] = useState(null);
  const [itCourse, setitCourse] = useState(null);
  const [detailCourseId, setDetailCourseeId] = useState(null);
  /* this section for course route  function */
  const [selectedCourses, setSelectedCourses] = useState([]);
  /* loadbar state */
  const [loadTxt, setLoadTxt] = useState("Loading...");

  /*  */
  useEffect(() => {
    let isDone = true;
    if (isDone) {
      AuthService.isAuthenticated().then((data) => {
        setUser(data.user);
        setIsAuthenticated(data.isAuthenticated);
        setIsLoaded(true);
      });
      axios
        .get("http://localhost:4000/courses")
        .then((data) => setCourses(data.data))
        .catch((err) => console.log(err));
      /*  */
      const user = {
        username: localStorage.getItem("currUser"),
      };
      CourseService.findAll(user).then((data) => {
        setSelectedCourses(data.courses);
      });
      setTimeout(() => {
        setLoadTxt(
          "Please trun on your VPN and refresh the page...! if is not working because server is down. 🙂"
        );
      }, 6000);
    }
    /*  */
    return () => {
      isDone = false;
    };
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <div className="load-page">
          <div className="loader-wrapper">
            <div className="loader">
              <div className="loader loader-inner"></div>
            </div>
          </div>
          <h1>{loadTxt}</h1>
        </div>
      ) : (
        <AuthContext.Provider
          value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            courses,
            userCourse,
            setUserCourse,
            detailCourseId,
            setDetailCourseeId,
            selectedCourses,
            setSelectedCourses,
          }}
        >
          {children}
        </AuthContext.Provider>
      )}
    </div>
  );
};
