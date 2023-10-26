// Function to fetch and display completed assignments
async function fetchCompletedAssignments() {
    try {

                // Get the authentication token from wherever it's stored (e.g., localStorage)
                const token = localStorage.getItem('authToken');

                console.log('Authentication Token:', token); // Log the authentication token


      const response = await fetch('https://smartcodebase.onrender.com/api/completed-assignments', {
        headers: {
            'Authorization': `Bearer ${token}` // Replace with your authentication token
        }
    });
    
      if (response.ok) {
        const data = await response.json();
  
        const completedAssignmentsSection = document.getElementById('completed-assignments');
  
        // Clear any existing content in the completed assignments section
        completedAssignmentsSection.innerHTML = '';
  
        // Loop through the completed assignments and display them
        data.completedAssignments.forEach((assignment) => {
          const assignmentItem = document.createElement('div');
          assignmentItem.classList.add('assignment-item');
          assignmentItem.textContent = assignment.assignment_name;
          completedAssignmentsSection.appendChild(assignmentItem);
        });
      } else {
        console.error('Failed to fetch completed assignments');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  // Call the function to fetch and display completed assignments when the page loads
  fetchCompletedAssignments();
  