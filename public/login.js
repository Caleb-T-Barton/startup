(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('userName');
    if (userName) {
        authenticated = true;
        let getSEl = document.querySelector('#index-getstarted');
        let window = location.href.split("/").slice(-1)[0];
        if (window === 'index.html') {
            getSEl.setAttribute('onclick',`location.href='dashboard.html'`);
        }
    }
    else {
        authenticated = false;
        let logoutEl = document.querySelector('#index-logout');
        let aboutLogoutEl = document.querySelector('#about-logout');
        let dashEl = document.querySelector('#index-dashboard');
        let importEl = document.querySelector('#index-import');
        let dashLiEl = document.querySelector('#index-dropdown-dashboard');
        let aDashEl = document.querySelector('#about-dashboard');
        let aImportEl = document.querySelector('#about-import');
        let aDashLiEl = document.querySelector('#about-dropdown-dashboard');
        let window = location.href.split("/").slice(-1)[0];
        let home = location.href;
        if (window === 'index.html' || home === 'https://startup.schedulebuilder.click/') {
            dashEl.style.display = 'none';
            importEl.style.display = 'none';
            dashLiEl.style.display = 'none';
            logoutEl.style.display = 'none';
        }
        if (window === 'about.html') {
            aDashEl.style.display = 'none';
            aImportEl.style.display = 'none';
            aDashLiEl.style.display = 'none';
            aboutLogoutEl.style.display = 'none';
        }
    }
  })();

async function createUser() {
    const userName = document.querySelector('#name')?.value;
    const password = document.querySelector('#password')?.value;
    localStorage.setItem('userName', userName);
    try {
        const response = await fetch('/api/auth/create', {
            method: 'post',
            body: JSON.stringify({ name: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            window.location.href = 'dashboard.html';
        } else {
            alert('Username already exists');
        }
    } catch (error) {
        console.log(error);
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