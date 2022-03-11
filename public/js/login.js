const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.querySelector('#userEmail').value.trim();
  const password = document.querySelector('#userPW').value.trim();

  if (email && password) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      document.getElementById(`incorrectInformation`).innerHTML = `The Email Address, Or the password was incorrect. <br> Please Try Again.`
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);