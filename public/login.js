async function createUser() {
    let endpoint = `/api/auth/create`;
    const userName = document.querySelector('#name')?.value;
    const password = document.querySelector('#password')?.value;
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
