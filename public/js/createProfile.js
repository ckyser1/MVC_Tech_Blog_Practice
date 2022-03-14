const newProfile = async (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#formFName').value.trim();
    const lastName = document.querySelector('#formLName').value.trim();
    const email = document.querySelector('#formEmail').value.trim();
    const password = document.querySelector('#formPassword').value.trim();
    const location = document.querySelector('#country').value.trim();
    const age = document.querySelector('#formAge').value.trim();
    const selectedRadio = document.querySelector('.healthRadio').value;

    if (firstName && lastName && email && password && selectedRadio && location && age) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ first_name: firstName, last_name: lastName, email, password, location, health_status: selectedRadio }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {

            document.location.replace('/')

        } else {
            alert('fail')
        }
    }
}

document
    .addEventListener('submit', newProfile)