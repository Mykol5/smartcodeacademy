document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email').value;

        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
        };

        fetch('https://smartcodebase.onrender.com/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
        .then(async (response) => {
            if (response.ok) {
                // Registration was successful, redirect to the email verification page
                window.location.href = `https://smartcodeacademy.netlify.app/email-verification.html?email=${email}`;
            } else {
                // Registration failed, handle the error
                const errorMessage = await response.text();
                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: errorMessage,
                });
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            // Handle other errors if needed
        });
    });
});













// document.addEventListener('DOMContentLoaded', function () {
//     const registerForm = document.getElementById('register-form');

//     registerForm.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const firstName = document.getElementById('first-name').value;
//         const lastName = document.getElementById('last-name').value;
//         const email = document.getElementById('email').value;

//         const userData = {
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//         };

//         fetch('https://smartcodebase.onrender.com/api/register', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(userData),
//         })
//         .then((response) => {
//             if (response.ok) {
//                 // Registration was successful, redirect to the email verification page
//                 window.location.href = `http://localhost:5500/client/email-verification.html?email=${email}`;
//             } else {
//                 // Registration failed, handle the error
//                 console.error('Registration failed:', response.statusText);
//                 // You can display an error message to the user if needed
//             }
//         })
//         .catch((error) => {
//             console.error('Error:', error);
//         });
//     });
// });










// document.addEventListener('DOMContentLoaded', function () {
//     const registerForm = document.getElementById('register-form');
//     const notificationDiv = document.getElementById('notification');
  
//     registerForm.addEventListener('submit', function (e) {
//       e.preventDefault();
  
//       const firstName = document.getElementById('first-name').value;
//       const lastName = document.getElementById('last-name').value;
//       const email = document.getElementById('email').value;
  
//       // Create a data object with user input
//       const userData = {
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//       };
  
//       // Send a POST request to the server's /register route
//       fetch('https://smartcodebase.onrender.com/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // Handle the server's response here
//           if (data.status === 'success') {
//             // Registration successful, display a success message
//             notificationDiv.innerHTML = `<div class="success">${data.message}</div>`;
//           } else {
//             // Registration failed, display an error message
//             notificationDiv.innerHTML = `<div class="error">${data.error}</div>`;
//           }
//         })
//         .catch((error) => {
//           // Handle any errors that occur during the fetch request
//           console.error('Error:', error);
//           notificationDiv.innerHTML = `<div class="error">An error occurred.</div>`;
//         });
//     });
//   });
  