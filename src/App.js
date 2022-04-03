import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./page/Register";
import { AuthContext } from "./Context/AuthContext";
import CoursePick from "./page/CoursePick";
import DetailCourse from "./page/DetailCourse";
import Home from "./page/home/Home";

function App() {
  const {
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
  } = useContext(AuthContext);
  //console.log(selectedCourses);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="course" element={<CoursePick />}></Route>
        <Route path="detail" element={<DetailCourse />}></Route>
        <Route path="home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
