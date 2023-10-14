// Updated JavaScript (login.js)
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    // const notificationElement = document.getElementById('notification');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const userId = document.getElementById('user-id').value; // Updated to user-id

        // Create a data object with the user ID
        const loginData = {
            user_id: userId, // Updated to user_id
        };

        // Send a POST request to the server's /login route
        fetch('https://smartcodebase.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
        })
        .then((response) => response.json())
        .then((data) => {
            // Handle the server's response here (e.g., show a success message)
            console.log(data);

            if (data.message === 'Login successful.') {

                // Store the authentication token in Local Storage
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('username', data.username);

                // Show a success notification using SweetAlert2
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Login successful.',
                }).then(() => {
                    window.location.href = '/client/index.html'; // Redirect after the user clicks "OK"
                });
            } else {
                // Show an error notification using SweetAlert2
                Swal.fire({
                    icon: 'error',
                    title: 'Error!',
                    text: 'Login failed. Please check your credentials.',
                });
            }
        })
        .catch((error) => {
            // Handle any errors that occur during the fetch request
            console.error('Error:', error);
        });
    });
});










// document.addEventListener('DOMContentLoaded', function () {
//     const loginForm = document.getElementById('login-form');

//     loginForm.addEventListener('submit', function (e) {
//         e.preventDefault();

//         const verificationCode = document.getElementById('student-code').value;

//         // Create a data object with the student code
//         const loginData = {
//             verificationCode: verificationCode,
//         };

//         // Send a POST request to the server's /login route
//         fetch('https://smartcodebase.onrender.com/api/login', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(loginData),
//         })
//         .then((response) => response.json())
//         .then((data) => {
//             // Handle the server's response here (e.g., show a success message)
//             console.log(data);

//             // You can also redirect the user to the dashboard page if login is successful
//             if (data.message === 'Login successful.') {
//                 window.location.href = '/client/index.html'; // Change the URL as needed
//             }
//         })
//         .catch((error) => {
//             // Handle any errors that occur during the fetch request
//             console.error('Error:', error);
//         });
//     });
// });
