document.addEventListener('DOMContentLoaded', () => {
  // Get the authentication token from wherever it's stored (e.g., localStorage)
  const token = localStorage.getItem('authToken');

  console.log('Authentication Token:', token); // Log the authentication token

  fetch('https://smartcodebase.onrender.com/api/completed-assignments', {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${token}`,
      },
  })
  .then(response => response.json())
  .then(data => {
      const completedAssignments = data.completedAssignments; // Access the array of completed assignments

      console.log('Received completed assignments:', completedAssignments);

      // Assuming you receive an array of completed assignments with properties like assignment_name and due_date
      const completedAssignmentsList = document.getElementById('completed-assignments');

      if (!Array.isArray(completedAssignments)) {
          console.error('Invalid completed assignments data:', completedAssignments);
          completedAssignmentsList.innerHTML = '<li>Error: Invalid data</li>';
          return;
      }

      if (completedAssignments.length === 0) {
          // No completed assignments, display a message
          completedAssignmentsList.innerHTML = '<li>No completed assignments yet</li>';
      } else {
          // Iterate through the completed assignments and add them to the list
          completedAssignments.forEach(assignment => {
              console.log('Assignment object:', assignment);

              const listItem = document.createElement('li');
              const assignmentName = document.createElement('span');
              assignmentName.textContent = assignment.assignment_name;
              listItem.appendChild(assignmentName);

              // Check if the assignment is overdue
              if (assignment.due_date) {
                  const dueDate = new Date(assignment.due_date);
                  const currentDate = new Date();

                  console.log('Due Date:', dueDate);
                  console.log('Current Date:', currentDate);
                  console.log('Is assignment overdue?', dueDate < currentDate);

                  if (dueDate < currentDate) {
                      console.log('Assignment is overdue:', assignment.assignment_name);
                      const expiredBadge = document.createElement('span');
                      expiredBadge.textContent = ' (Expired)';
                      expiredBadge.classList.add('expired-badge');
                      listItem.appendChild(expiredBadge);
                  }
              }

              completedAssignmentsList.appendChild(listItem);
          });
      }
  })
  .catch(error => {
      console.error('Error fetching completed assignments:', error);
      // Handle the error, e.g., by displaying an error message
  });
});
