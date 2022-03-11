const newProfile = async (e) => {
    e.preventDefault();

    const firstName = document.querySelector('#formFName').value.trim();
    const lastName = document.querySelector('#formLName').value.trim();
    const email = document.querySelector('#formEmail').value.trim();
    const bio = document.querySelector('#bio').value.trim(); 
    const location = document.querySelector('#country').value.trim();
    const selectedRadio = document.querySelector('input:checked').value;

    if (firstName && lastName && email && bio && selectedRadio && location) {
        const response = await fetch(`api/signup`, {
            method: 'POST',
            body: JSON.stringify({firstName, lastName, email, healthStatus, location}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}

document
    .addEventListener('submit', newProfile)