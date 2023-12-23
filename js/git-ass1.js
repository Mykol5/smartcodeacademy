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
        const assignmentName = "GIT Assignment 1"; // Replace with the actual lecture name

        console.log('Authentication Token:', token);

        // Create a FormData object to send the data as a multipart/form-data
        const formData = new FormData();
        formData.append('screenshot', screenshotFile, screenshotFile.name);        // Use the uploaded file
        formData.append('assignmentName', assignmentName);

        // Log the FormData object here after adding data
        console.log('FormData:', formData);

        // Send the code content to the server for processing
        const screenshotResponse = await fetch('https://smartcodebase.onrender.com/api/submit-assignment-screenshot', {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData, // Send the FormData object
        });

        if (screenshotResponse.ok) {
            // Screenshot submitted successfully
            console.log('Assignment screenshot submitted successfully');

            // Redirect to the dashboard page or update the badge
            window.location.href = '/index.html'; // Replace with your actual dashboard page URL
        } else {
            // Handle errors if submission fails
            console.error('Failed to submit assignment screenshot');
        }
    });
});

