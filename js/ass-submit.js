document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button');
    const htmlCodeTextarea = document.getElementById('html-code');
    const cssCodeTextarea = document.getElementById('css-code');
    const jsCodeTextarea = document.getElementById('js-code');
    const completionBadge = document.getElementById('completion-badge');

    submitButton.addEventListener('click', async () => {
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
        const authToken = localStorage.getItem('authToken');
        const assignmentName = "HTML Assignment 1"; // Replace with the actual assignment name

        console.log('Authentication Token:', authToken); // Log the authentication token

        // Send the code content to the server for processing
        const response = await fetch('https://smartcodebase.onrender.com/api/submit-assignment-result', {
            method: 'PUT', // Change to PUT method
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json', // Add Content-Type header
            },
            body: JSON.stringify({ htmlCode, cssCode, jsCode, assignmentName }), // Include assignmentName
        });

        if (response.ok) {
            // Assignment submitted successfully
            console.log('Assignment submitted successfully');


            
            // Redirect to the dashboard page
            window.location.href = '/index.html'; // Replace with your actual dashboard page URL
        } else {
            // Handle errors or display an error message
            console.error('Failed to submit assignment');
        }
    });
});
