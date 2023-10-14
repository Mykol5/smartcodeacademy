document.addEventListener('DOMContentLoaded', () => {
    // Get the authentication token from wherever it's stored (e.g., localStorage)
    const token = localStorage.getItem('authToken');
  
    // Fetch grades for the current user
    fetch('https://smartcodebase.onrender.com/api/grades', {
      headers: {
        'Authorization': `Bearer ${token}` // Replace with your actual authentication token
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Grades data received:', data); // Log the received data
        const gradesList = document.getElementById('grades-list');
  
        // Loop through the grades data and create list items
        data.grades.forEach(grade => {
          console.log('Grade:', grade); // Log each grade
          const listItem = document.createElement('li');
          
          // Create a strong (bold) element for the assignment name
          const assignmentName = document.createElement('strong');
          assignmentName.textContent = grade.assignment_name;
          listItem.appendChild(assignmentName);
  
          // Add a space and the grade
          listItem.appendChild(document.createTextNode(' Grade: ' + grade.grade));
          
          // Change the color based on the score
          if (parseFloat(grade.grade) < 50) {
            listItem.style.color = 'red'; // If the grade is below 50, set the color to red
          } else {
            listItem.style.color = 'green'; // If the grade is 50 or above, set the color to green
          }
  
          gradesList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching grades:', error);
      });
  });
  






// document.addEventListener('DOMContentLoaded', () => {

//     // Get the authentication token from wherever it's stored (e.g., localStorage)
//     const token = localStorage.getItem('authToken');


//     // Fetch grades for the current user
//     fetch(`https://smartcodebase.onrender.com/api/grades`, {
//       headers: {
//         'Authorization': `Bearer ${token}` // Replace with your actual authentication token
//       }
//     })
//       .then(response => response.json())
//       .then(data => {

//         console.log('Grades data received:', data); // Log the received data
//         const gradesList = document.getElementById('grades-list');
  
//         // Loop through the grades data and create list items
//         data.grades.forEach(grade => {
//           console.log('Grade:', grade); // Log each grade
//           const listItem = document.createElement('li');
//           listItem.textContent = `${grade.assignment_name} Grade: ${grade.grade}`;
//           gradesList.appendChild(listItem);
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching grades:', error);
//       });
//   });
  