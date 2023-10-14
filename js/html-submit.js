document.addEventListener('DOMContentLoaded', () => {
    const submitResultButton = document.getElementById('submit-result-button');
    const htmlCodeTextarea = document.getElementById('html-code');
    const cssCodeTextarea = document.getElementById('css-code');
    const jsCodeTextarea = document.getElementById('js-code');

    submitResultButton.addEventListener('click', async () => {
        const htmlCode = htmlCodeTextarea.value;
        const cssCode = cssCodeTextarea.value;
        const jsCode = jsCodeTextarea.value;

        // Check if HTML, CSS, and JS code text areas are empty
        if (!htmlCode.trim() || !cssCode.trim() || !jsCode.trim()) {
            // If any of the text areas are empty, prevent submission and display an error message
            alert('Please enter code in all text areas before submitting.');
            return; // Exit the function, submission is prevented
        }

        // Get the authentication token from wherever it's stored (e.g., localStorage)
        const token = localStorage.getItem('authToken');
        const lectureName = "Introduction to HTML"; // Replace with the actual lecture name

        console.log('Authentication Token:', token); // Log the authentication token

        // Send the code content to the server for processing
        const lectureResponse = await fetch('https://smartcodebase.onrender.com/api/submit-lecture-result', {
            method: 'PUT', // Change to PUT method
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json', // Add Content-Type header
            },
            body: JSON.stringify({ htmlCode, cssCode, jsCode, lectureName }), // Include lectureName
        });

        if (lectureResponse.ok) {
            // Content submitted successfully
            console.log('Lecture exercise submitted successfully');

            // Redirect to the dashboard page
            window.location.href = '/client/index.html'; // Replace with your actual dashboard page URL

        } else {
            // Handle errors if submission fails
            console.error('Failed to submit lecture result');
        }
    });
});












// document.addEventListener('DOMContentLoaded', () => {
//     const submitResultButton = document.getElementById('submit-result-button');
//     const htmlCodeTextarea = document.getElementById('html-code');
//     const cssCodeTextarea = document.getElementById('css-code');
//     const jsCodeTextarea = document.getElementById('js-code');

//     submitResultButton.addEventListener('click', async () => {
//         const htmlCode = htmlCodeTextarea.value;
//         const cssCode = cssCodeTextarea.value;
//         const jsCode = jsCodeTextarea.value;

//         // Get the authentication token from wherever it's stored (e.g., localStorage)
//         const token = localStorage.getItem('authToken');

//         console.log('Authentication Token:', token); // Log the authentication token

//         // Send the code content to the server for processing
//         const lectureResponse = await fetch('https://smartcodebase.onrender.com/api/submit-lecture-result', {
//             method: 'PUT', // Change to PUT method
//             headers: {
//                 'Authorization': `Bearer ${token}`,
//                 'Content-Type': 'application/json', // Add Content-Type header
//             },
//             body: JSON.stringify({ htmlCode, cssCode, jsCode }), // Send data as JSON
//         });

//         if (lectureResponse.ok) {
//             // Content submitted successfully
//             console.log('Lecture exercise submitted successfully');
//         } else {
//             // Handle errors if submission fails
//             console.error('Failed to submit lecture result');
//         }
//     });
// });
