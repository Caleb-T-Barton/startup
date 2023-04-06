(async () => {
    let userName = localStorage.getItem('userName');
    displayAppControls(userName);
  })();

async function createUser() {
    const userName = document.querySelector('#name')?.value;
    const password = document.querySelector('#password')?.value;
    let user = await getUser(userName);
    if (user === null) {
        localStorage.setItem('userName', userName);
        try {
            const response = await fetch('/api/auth/create', {
                method: 'post',
                body: JSON.stringify({ name: userName, password: password }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const body = await response.json();
            if (response?.status === 200) {
                window.location.href = 'dashboard.html';
            } else {
                console.log(body.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }
    else {
        try {
            console.log(user.authenticated);
            const response = await fetch('/api/auth/login', {
                method: 'post',
                body: JSON.stringify({ name: userName, password: password }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const body = await response.json();
            if (response?.status === 200) {
                localStorage.setItem('userName', userName);
                window.location.href = 'dashboard.html';
            } else {
                alert(body.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

function logOut() {
    localStorage.clear();
    fetch('api/auth/logout', {
        method: 'delete',
    }).then(() => (window.location.href = '/index.html'));
}

function displayUserName() {
    let nameEl = document.querySelector('#name-course');
    let name = localStorage.getItem('userName');
    nameEl.textContent = name + "'s Courses";
}

async function getUser(name) {
    // See if we have a user with the given name.
    const response = await fetch(`/api/user/${name}`);
    if (response.status === 200) {
      return response.json();
    } else {
        return null;
    }
  }

async function displayAppControls(userName) {
    let getSEl = document.querySelector('#index-getstarted');
    let logoutEl = document.querySelector('#index-logout');
    let aboutLogoutEl = document.querySelector('#about-logout');
    let dashEl = document.querySelector('#index-dashboard');
    let importEl = document.querySelector('#index-import');
    let dashLiEl = document.querySelector('#index-dropdown-dashboard');
    let aDashEl = document.querySelector('#about-dashboard');
    let aImportEl = document.querySelector('#about-import');
    let aDashLiEl = document.querySelector('#about-dropdown-dashboard');

    // Check user is logged in or not
    let user = await getUser(userName);
    if (userName !== null) {
        if (user.authenticated) {
            getSEl.setAttribute('onclick',`location.href='dashboard.html'`);
        }
    }
    else {
        dashEl.style.display = 'none';
        importEl.style.display = 'none';
        dashLiEl.style.display = 'none';
        logoutEl.style.display = 'none';
        aDashEl.style.display = 'none';
        aImportEl.style.display = 'none';
        aDashLiEl.style.display = 'none';
        aboutLogoutEl.style.display = 'none';
    }
}

