// JavaScript to fetch and display user-specific data in the dashboard
document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Get the authentication token from wherever it's stored (e.g., localStorage)
        const token = localStorage.getItem('authToken');

        // Fetch upcoming deadlines
        const deadlinesResponse = await fetch('https://smartcodebase.onrender.com/api/upcoming-deadlines', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (deadlinesResponse.ok) {
            const deadlinesData = await deadlinesResponse.json();
            // Display deadlinesData in the "Upcoming Deadlines" section
            // Update the HTML with the fetched data
        } else {
            console.error('Failed to fetch upcoming deadlines');
        }

        // Repeat the above steps for fetching grades and notifications

    } catch (error) {
        console.error('Error:', error);
    }
});
