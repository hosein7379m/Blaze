import React, { createContext, useState, useEffect } from "react";
import AuthService from "../Services/AuthService";
import axios from "axios";
import CourseService from "../Services/CourseService";

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
        .get("https://serverblaze.herokuapp.com/courses")
        .then((data) => setCourses(data.data))
        .catch((err) => console.log(err));
      /*  */
      const user = {
        username: localStorage.getItem("currUser"),
      };
      CourseService.findAll(user).then((data) => {
        setSelectedCourses(data);
      });
    }
    return () => {
      isDone = false;
    };

    /*  */
  }, []);
  //console.log(user);
  //console.log(hasCourse);
  //console.log(selectedCourses);
  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
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
