document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded');
    const submitScreenshotButton = document.getElementById('submit-button');
    // const screenshotForm = document.getElementById('screenshot-form');
    const screenshotInput = document.getElementById('screenshot');

    submitScreenshotButton.addEventListener('click', async () => {
        const screenshotFile = screenshotInput.files[0];

        if (!screenshotFile) {
            alert('Please select a screenshot to submit.');
            return;
        }

        console.log('Selected File:', screenshotFile);

        // Get the authentication token from wherever it's stored (e.g., localStorage)
        const token = localStorage.getItem('authToken');
        const lectureName = "Introduction to VSCODE 1"; // Replace with the actual lecture name

        console.log('Authentication Token:', token);

        // Create a FormData object to send the data as a multipart/form-data
        const formData = new FormData();
        formData.append('screenshot', screenshotFile, screenshotFile.name);        // Use the uploaded file
        formData.append('lectureName', lectureName);

        // Log the FormData object here after adding data
        console.log('FormData:', formData);

        // Send the code content to the server for processing
        const screenshotResponse = await fetch('https://smartcodebase.onrender.com/api/submit-lecture-screenshot', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData, // Send the FormData object
        });

        if (screenshotResponse.ok) {
            // Screenshot submitted successfully
            console.log('Lecture screenshot submitted successfully');

            // Redirect to the dashboard page or update the badge
            window.location.href = '/index.html'; // Replace with your actual dashboard page URL
        } else {
            // Handle errors if submission fails
            console.error('Failed to submit lecture screenshot');
        }
    });
});




// document.addEventListener('DOMContentLoaded', () => {
//     const submitScreenshotButton = document.getElementById('submit-button');
//     const screenshotInput = document.getElementById('screenshot');

//     submitScreenshotButton.addEventListener('click', async () => {
//         const screenshotFile = screenshotInput.files[0];

//         // Check if a file has been selected
//         if (!screenshotFile) {
//             alert('Please select a screenshot to submit.');
//             return;
//         }

//         // Read the selected screenshot as a base64 encoded string
//         const reader = new FileReader();
//         reader.onload = async (event) => {
//             const screenshotData = event.target.result;
//             console.log('Screenshot Data:', screenshotData);

//             const screenshotBuffer = Buffer.from(screenshotData, 'base64');
//             console.log('Screenshot Buffer:', screenshotBuffer);

//             // Get the authentication token from wherever it's stored (e.g., localStorage)
//             const token = localStorage.getItem('authToken');
//             const lectureName = "Introduction to VSCODE"; // Replace with the actual lecture name

//             console.log('Authentication Token:', token); // Log the authentication token

//             // Send the screenshot data to the server for processing
//             const screenshotResponse = await fetch('http://localhost:8080/api/submit-lecture-screenshot', {
//                 method: 'PUT', // Use PUT method
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json', // Add Content-Type header
//                 },
//                 body: JSON.stringify({ screenshot: screenshotData, lectureName }), // Include lectureName
//             });

//             if (screenshotResponse.ok) {
//                 // Screenshot submitted successfully
//                 console.log('Lecture screenshot submitted successfully');

//                 // Redirect to the dashboard page or update the badge
//                 window.location.href = '/client/index.html'; // Replace with your actual dashboard page URL
//             } else {
//                 // Handle errors if submission fails
//                 console.error('Failed to submit lecture screenshot');
//             }
//         };

//         // Read the screenshot file as a base64 string
//         reader.readAsDataURL(screenshotFile);
//     });
// });
