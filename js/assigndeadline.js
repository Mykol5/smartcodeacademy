document.addEventListener('DOMContentLoaded', () => {
    // Assuming you have a user-specific token stored in localStorage
    const authToken = localStorage.getItem('authToken');

    // ...

    fetch('https://smartcodebase.onrender.com/api/upcoming-assignments', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    })
    .then(response => response.json())
    .then(upcomingAssignments => {
        console.log('Received upcoming assignments:', upcomingAssignments); // Add this line for debugging

        // Assuming you receive an array of upcoming assignments with properties like assignment_name and due_date
        const upcomingDeadlinesList = document.getElementById('upcoming-deadlines-list');

        if (!Array.isArray(upcomingAssignments)) {
            console.error('Invalid upcoming assignments data:', upcomingAssignments);
            upcomingDeadlinesList.innerHTML = '<li>Error: Invalid data</li>';
            return;
        }

        if (upcomingAssignments.length === 0) {
            // No upcoming assignments, you can display a message
            upcomingDeadlinesList.innerHTML = '<li>No upcoming assignments</li>';
        } else {
// Iterate through the upcoming assignments and add them to the list
upcomingAssignments.forEach(assignment => {
    console.log('Assignment object:', assignment); // Add this line
    const listItem = document.createElement('li');
    const assignmentLink = document.createElement('a');
    const deadlineDate = new Date(assignment.due_date);

    // Generate a URL-friendly assignment name
    const encodedAssignmentName = assignment.assignment_name.replace(/\s+/g, '-').toLowerCase();
    const assignmentURL = `/${encodedAssignmentName}.html`;

    // Set the assignment link properties
    assignmentLink.textContent = `${assignment.assignment_name} Deadline: ${deadlineDate.toLocaleDateString()}`;
    assignmentLink.href = assignmentURL;

    // Check if the assignment is overdue
    if (deadlineDate < new Date()) {
        assignmentLink.classList.add('text-danger'); // Apply red text color for overdue assignments
    } else {
        assignmentLink.classList.add('text-success'); // Apply green text color for upcoming assignments
    }

    console.log('Assignment "completed" property:', assignment.completed);

    if (assignment.completed) {
        const completedBadge = document.createElement('span');
        completedBadge.classList.add('badge', 'bg-success', 'ms-2');
        completedBadge.textContent = 'Completed';
        console.log('Adding completed badge');
        listItem.appendChild(completedBadge);
    } else {
        const notCompletedBadge = document.createElement('span');
        notCompletedBadge.classList.add('badge', 'bg-danger', 'ms-2');
        notCompletedBadge.textContent = 'Not Completed';
        console.log('Adding not completed badge');
        listItem.appendChild(notCompletedBadge);
    }
    

                // // Update badge to "completed" if submission was successful
                // completedBadge.textContent = 'Completed';
                // completedBadge.classList.remove('badge-danger'); // Remove any "danger" class
                // completedBadge.classList.add('badge-success');   // Add a "success" class or any appropriate styling
    

    // Append the assignment link to the list item
    listItem.appendChild(assignmentLink);

    // Append the list item to the upcomingDeadlinesList
    upcomingDeadlinesList.appendChild(listItem);
});
        }
    })
    .catch(error => {
        console.error('Error fetching upcoming assignments:', error);
        // Handle the error, e.g., by displaying an error message
    });
});


















// document.addEventListener('DOMContentLoaded', () => {
//     // Assuming you have a user-specific token stored in localStorage
//     const authToken = localStorage.getItem('authToken');

//     // ...

//     fetch('https://smartcodebase.onrender.com/api/upcoming-assignments', {
//         method: 'GET',
//         headers: {
//             'Authorization': `Bearer ${authToken}`,
//         },
//     })
//     .then(response => response.json())
//     .then(upcomingAssignments => {
//         console.log('Received upcoming assignments:', upcomingAssignments); // Add this line for debugging

//         // Assuming you receive an array of upcoming assignments with properties like assignment_name and due_date
//         const upcomingDeadlinesList = document.getElementById('upcoming-deadlines-list');

//         if (!Array.isArray(upcomingAssignments)) {
//             console.error('Invalid upcoming assignments data:', upcomingAssignments);
//             upcomingDeadlinesList.innerHTML = '<li>Error: Invalid data</li>';
//             return;
//         }

//         if (upcomingAssignments.length === 0) {
//             // No upcoming assignments, you can display a message
//             upcomingDeadlinesList.innerHTML = '<li>No upcoming assignments</li>';
//         } else {
//             // Iterate through the upcoming assignments and add them to the list
//             upcomingAssignments.forEach(assignment => {
//                 const listItem = document.createElement('li');
//                 const deadlineDate = new Date(assignment.due_date);
//                 listItem.innerHTML = `<span>${assignment.assignment_name}</span>  Expires: ${deadlineDate.toLocaleDateString()}`;

//                 // Calculate the difference between the deadline and current date in milliseconds
//                 const timeDiff = deadlineDate - Date.now();

//                 if (timeDiff < 0) {
//                     listItem.style.color = 'red'; // Set text color to red for exceeded deadlines
//                 } else if (timeDiff <= (24 * 60 * 60 * 1000)) {
//                     listItem.style.color = 'green'; // Set text color to green for deadlines within 24 hours
//                 }

//                 upcomingDeadlinesList.appendChild(listItem);
//             });
//         }
//     })
//     .catch(error => {
//         console.error('Error fetching upcoming assignments:', error);
//         // Handle the error, e.g., by displaying an error message
//     });
// });
