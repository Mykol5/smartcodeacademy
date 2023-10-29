document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    const assignmentFeedback = document.getElementById('assignment-feedback').value;
    const courseFeedback = document.getElementById('course-feedback').value;

    // Create an object with feedback data and the user's token
    const feedbackData = {
        assignmentFeedback,
        courseFeedback,
        token: localStorage.getItem('authToken'), // Retrieve the user's token from localStorage
    };

    console.log('Authentication Token:', feedbackData.token); // Log the authentication token

    fetch('https://smartcodebase.onrender.com/api/process-feedback', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${feedbackData.token}`, // Include the token in the headers
        },
        body: JSON.stringify(feedbackData),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the response from the server
        // You can also show a success message to the user
    })
    .catch(error => {
        console.error(error); // Handle errors if any
        // You can show an error message to the user
    });
});
