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
        let dashEl = document.querySelector('#index-dashboard');
        let importEl = document.querySelector('#index-import');
        let dashLiEl = document.querySelector('#index-dropdown-dashboard');
        let aDashEl = document.querySelector('#about-dashboard');
        let aImportEl = document.querySelector('#about-import');
        let aDashLiEl = document.querySelector('#about-dropdown-dashboard');
        let window = location.href.split("/").slice(-1)[0];
        if (window === 'index.html') {
            dashEl.style.display = 'none';
            importEl.style.display = 'none';
            dashLiEl.style.display = 'none';
        } else {
            aDashEl.style.display = 'none';
            aImportEl.style.display = 'none';
            aDashLiEl.style.display = 'none';
        }
    }
  })();

async function createUser() {
    let endpoint = `/api/auth/create`;
    const userName = document.querySelector('#name')?.value;
    const password = document.querySelector('#password')?.value;
    localStorage.setItem('userName', userName);
    try {
        const response = await fetch(endpoint, {
            method: 'post',
            body: JSON.stringify({ name: userName, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        console.log(response);
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
}

function displayUserName() {
    let nameEl = document.querySelector('#name-course');
    let name = localStorage.getItem('userName');
    nameEl.textContent = name + " Course's";
}