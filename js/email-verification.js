// Extract email from the query parameter
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

// Pre-fill the email field in the form
document.getElementById('email').value = email;



// fetch('https://smartcodebase.onrender.com/api/verify-email', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({ email: email, verificationCode: verificationCode }),
// })

