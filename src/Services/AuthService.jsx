export default {
  login: (user) => {
    return fetch("http://localhost:4000/user/login", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.status !== 401) {
        return res.json().then((data) => data);
      } else {
        return { isAuthenticated: false, user: { username: "" } };
      }
    });
  },
  register: (user) => {
    return fetch("http://localhost:4000/user/register", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((err) => err);
  },
  userInfo: (user) => {
    return fetch("http://localhost:4000/user/userinfo", {
      method: "post",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => data)
      .catch((err) => err);
  },
  logout: () => {
    return fetch("http://localhost:4000/user/logout")
      .then((res) => res.json())
      .then((data) => data);
  },
  isAuthenticated: () => {
    return fetch("http://localhost:4000/user/authenticated").then(
      (res) => {
        if (res.status !== 401) {
          return res.json().then((data) => data);
        } else {
          return { isAuthenticated: false, user: { username: "" } };
        }
      }
    );
  },
};
