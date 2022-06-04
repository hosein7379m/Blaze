import React, { useEffect, useState } from "react";
import "./StartedCourse.css";
import CourseService from "../../Services/CourseService";
import axios from "axios";

const StartedCourse = ({
  name,
  language,
  courseID,
  image,
  ID,
  favorite,
  complete,
}) => {
  const [checkFav, setCheckFav] = useState(false);
  const [checkCom, setCheckCom] = useState(false);

  /* function for check status of fav and comp button */
  const checkComplete = () => {
    setCheckCom(!checkCom);
  };
  const checkFavorite = () => {
    setCheckFav(!checkFav);
  };

  /*  */
  const handleFavorite = (e) => {
    let currID = e.target.attributes[0].nodeValue;
    axios.patch(`http://localhost:4000/usercourse/updatefavorite/${currID}`);
    checkFavorite();

    // setInitialFav(() => {
    //   return [...new Set(initialFav)];
    // });
  };
  const handleComplete = (e) => {
    let currID = e.target.attributes[0].nodeValue;
    axios.patch(`http://localhost:4000/usercourse/updatecomplete/${currID}`);
    checkComplete();
  };
  useEffect(() => {
    /* check favorite */
    if (favorite) {
      setCheckFav(true);
    } else {
      setCheckFav(false);
    }
    /* check complete */
    if (complete) {
      setCheckCom(true);
    } else {
      setCheckCom(false);
    }
  }, [favorite, complete]);
  return (
    <div className="StartedCourse">
      <div className="image-cover">
        <img src={image} alt={name} />
      </div>
      <div className="course-info">
        <span className="course-name">
          <h5>{name}</h5>
        </span>
        <span className="course-duration">
          <p>22h 12min</p>
        </span>
        <span className="course-lang">
          <p>{language}</p>
        </span>
      </div>
      <hr
        style={{
          width: "80%",
          alignSelf: "center",
          margin: "1rem auto",
        }}
      />
      <div className="course-cta">
        <button className="cta-play">
          <i className={`fa-solid fa-play`}></i>
        </button>
        <button className="cta-fav">
          <i
            onClick={handleFavorite}
            name={ID}
            className={`fa-regular fa-heart ${checkFav ? "redLike" : null}`}
          ></i>
        </button>
        <button className="cta-comp">
          <i
            onClick={handleComplete}
            name={ID}
            className={`fa-regular fa-circle-check ${
              checkCom ? "greenCheck" : null
            }`}
          ></i>
        </button>
      </div>
    </div>
  );
};

export default StartedCourse;

/*
<div className="StartedCourse" style={{ backgroundImage: `url(${image})` }}>
      <div className="selected-content">
        <div className="selected-header">
          <span className="header-name">
            <h1>{name}</h1>
          </span>
          <span className="header-duration">
            <p>22h 20min</p>
          </span>
        </div>
        <div className="selected-footer">
          <span className="footer-cta">
            <button>
              <i className="fa-solid fa-play"></i>
            </button>
            <i
              className={`fa-solid fa-heart ${
                checkFav ? "redLike" : "blueLike"
              }`}
             
            ></i>
            <i
              className={`fa-solid fa-circle-check ${
                checkCom ? "greenCheck" : "blueCheck"
              }`}
              onClick={handleComplete}
              name={ID}
            ></i>
            <i class=""></i>
          </span>
          <span className="footer-language">
            <p>{language}</p>
          </span>
        </div>
      </div>
    </div>
*/
