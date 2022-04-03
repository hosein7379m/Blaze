export default {
  add: (course) => {
    return fetch("/usercourse/add", {
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
    return fetch("/usercourse/all", {
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
    return fetch(`/usercourse/delete/${courseDel}`, {
      method: "DELETE",
      body: JSON.stringify(courseDel),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json().then((data) => data);
    });
  },
};
