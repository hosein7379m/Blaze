import React, { useEffect } from "react";
import "../assets/css/sidebar.css";

const Sidebar = ({
  sideStatus,
  setSideStatus,
  currCategory,
  setCurrCategory,
}) => {
  /* this section for handle sidebar and when user resize the page this code recive cuurent width to if sidebar open and user resize the page, code will automatically change opacity  of CoursePick components. */
  let width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  /*  */
  useEffect(() => {
    window.onresize = resize;
  }, []);
  const resize = () => {
    console.log(width);
    if (width >= 701) {
      setSideStatus(false);
    }
  };

  return (
    <div
      className={`sidebar ${
        sideStatus && width < 700 ? "sideOpen" : "sideClose"
      }`}
    >
      <section className="sidebar-container">
        <div className="info-cat">
          <div className="user-info">
            <div className="user-greeting">
              <h3>hi</h3>
              <h1>{localStorage.getItem("currUser")}</h1>
            </div>
            <div className="close-menu">
              <i
                className="fa-solid fa-xmark"
                onClick={() => setSideStatus(!sideStatus)}
              ></i>
            </div>
          </div>
          <hr
            style={{
              backgroundColor: "rgb(119, 114, 114)",
              width: "80%",
              alignSelf: "center",
              margin: "1rem auto",
            }}
          />
          <div className="category">
            <h6>Category</h6>
            <div className="cat-btns">
              <button
                className="btn-all"
                value="all"
                onClick={() => setCurrCategory("")}
              >
                All
              </button>
              <button
                className="btn-web"
                value="web"
                onClick={() => setCurrCategory("web")}
              >
                Web Development
              </button>
              <button
                className="btn-mob"
                value="mobile"
                onClick={() => setCurrCategory("mobile")}
              >
                Mobile Development
              </button>
              <button
                className="btn-it"
                value="it"
                onClick={() => setCurrCategory("IT")}
              >
                IT & Software
              </button>
            </div>
          </div>
        </div>
        <div className="social-info">
          <h6>Contact Us</h6>
          <div className="media-icons">
            <a href="https://github.com/hosein7379m" className="github">
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.instagram.com/_.ho3ein.mo/"
              className="instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/hosein-moradi-4a3251232/"
              className="linkedin"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://twitter.com/mo_hosein1" className="twitter">
              <i className="fa-brands fa-twitter"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
