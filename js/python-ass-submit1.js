document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submit-button1');
    const pythonCodeTextarea = document.getElementById('python-code');
    const completionBadge = document.getElementById('completion-badge');

    submitButton.addEventListener('click', async () => {
        const pythonCode = pythonCodeTextarea.value;

        // Check if the Python code textarea is empty
        if (!pythonCode.trim()) {
            // If the textarea is empty, prevent submission and display an error message
            alert('Please enter Python code before submitting.');
            return; // Exit the function, submission is prevented
        }

        // Get the authentication token from wherever it's stored (e.g., localStorage)
        const authToken = localStorage.getItem('authToken');
        const assignmentName = "PYTHON Assignment 2"; // Replace with the actual assignment name

        console.log('Authentication Token:', authToken); // Log the authentication token

        // Send the code content to the server for processing
        const response = await fetch('https://smartcodebase.onrender.com/api/submit-python-assignment-result', {
            method: 'PUT', // Use the PUT method for Python assignments
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json', // Add Content-Type header
            },
            body: JSON.stringify({ pythonCode, assignmentName }), // Include assignmentName
        });

        if (response.ok) {
            // Assignment submitted successfully
            console.log('Python assignment submitted successfully');

            // Redirect to the dashboard page
            window.location.href = '/index.html'; // Replace with your actual dashboard page URL
        } else {
            // Handle errors or display an error message
            console.error('Failed to submit Python assignment');
        }
    });
});
