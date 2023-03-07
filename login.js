function login() {
    const userNameEl = document.querySelector("#email");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("userName", userNameEl.value);
    localStorage.setItem("password", passwordEl.value);
    window.location.href = "dashboard.html";
}

function getUserName() {
    const userName = localStorage.getItem("userName");
    const courseEl = document.querySelector("#name-course");
    courseEl.textContent = userName + "'s Courses";
}

getUserName();