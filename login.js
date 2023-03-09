function login() {
    const userNameEl = document.querySelector("#email");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("userName", userNameEl.value);
    localStorage.setItem("password", passwordEl.value);
    window.location.href = "dashboard.html";
}

function changePage(location) {
    const userNameExists = localStorage.getItem('userName');
    if (userNameExists) {
        window.location.href = location;
    }
    else {
        window.location.href = 'login.html';
    }
}

function displayUserName() {
    const userName = localStorage.getItem("userName");
    const courseEl = document.querySelector("#name-course");
    courseEl.textContent = userName + "'s Courses";
}

displayUserName();
