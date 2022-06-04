export default {
  add: (course) => {
    return fetch("http://localhost:4000/usercourse/add", {
      method: "post",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json().then((data) => data);
      })
      .catch((err) => err);
  },
  findAll: (username) => {
    return fetch("http://localhost:4000/usercourse/all", {
      method: "post",
      body: JSON.stringify(username),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json().then((data) => data);
    });
  },
  deleteCourse: (courseDel) => {
    return fetch(`http://localhost:4000/usercourse/delete/${courseDel}`, {
      method: "DELETE",
      body: JSON.stringify(courseDel),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json().then((data) => data);
    });
  },
  updateFavorite: (courseFav) => {
    return fetch(
      `http://localhost:4000/usercourse/updatefavorite/${courseFav}`,
      {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      return res.json().then((data) => data);
    });
  },
  updateFavorite: (courseComp) => {
    return fetch(
      `http://localhost:4000/usercourse/updatecomplete/${courseComp}`,
      {
        method: "patch",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      return res.json().then((data) => data);
    });
  },
};
