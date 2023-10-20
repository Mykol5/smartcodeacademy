document.addEventListener('DOMContentLoaded', () => {
    const submitResultButton = document.getElementById('submit-button'); // Update the button ID
    const pythonCodeTextarea = document.getElementById('python-code'); // Use the correct ID

    submitResultButton.addEventListener('click', async () => {
        const pythonCode = pythonCodeTextarea.value;

        // Check if the Python code textarea is empty
        if (!pythonCode.trim()) {
            // If the textarea is empty, prevent submission and display an error message
            alert('Please enter Python code before submitting.');
            return; // Exit the function, submission is prevented
        }

        // Get the authentication token from wherever it's stored (e.g., localStorage)
        const token = localStorage.getItem('authToken');
        const lectureName = "Introduction to PYTHON 1"; // Change the lecture name

        console.log('Authentication Token:', token); // Log the authentication token

        // Send the code content to the server for processing
        const lectureResponse = await fetch('https://smartcodebase.onrender.com/api/submit-lecture-result-python', { // Update the URL
            method: 'PUT', // Change to PUT method
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json', // Add Content-Type header
            },
            body: JSON.stringify({ pythonCode, lectureName }), // Include lectureName
        });

        if (lectureResponse.ok) {
            // Content submitted successfully
            console.log('Python lecture exercise submitted successfully');

            // Redirect to the dashboard page
            window.location.href = '/index.html'; // Replace with your actual dashboard page URL

        } else {
            // Handle errors if submission fails
            console.error('Failed to submit Python lecture result');
        }
    });
});



// name = "mike"
// print("Hello, " + name + "!" + "You are 30 years old")