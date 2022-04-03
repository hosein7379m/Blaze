export default {
  add: (course) => {
    return fetch("https://serverblaze.herokuapp.com/usercourse/add", {
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
    return fetch("https://serverblaze.herokuapp.com/usercourse/all", {
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
    return fetch(
      `https://serverblaze.herokuapp.com/usercourse/delete/${courseDel}`,
      {
        method: "DELETE",
        body: JSON.stringify(courseDel),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      return res.json().then((data) => data);
    });
  },
};
