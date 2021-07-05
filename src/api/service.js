const loginSubmit = (initialValues) => {
  fetch("http://step.bangits.com/api/Auth/Login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(initialValues),
  })
    .then((res) => {
      if (res.status < 400) {
        alert("Successfully logged in !!!");
        return res.json();
      } else {
        const err = new Error("Incorrect username or password");
        alert(err);
      }
    })
    .then((resJson) => {
      
    });
};

const registerSubmit = (initialValues) => {
  fetch("http://step.bangits.com/api/Auth/Register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(initialValues),
  })
    .then((res) => {
      if (res.status < 400) {
        alert("Successfully registered !!!");
        return res.json();
      } else {
        const err = new Error("Network Error:Status code 400 and higher");
        alert(err);
      }
    })
    .then((resJson) => {
      
    });
};

export { loginSubmit, registerSubmit };
