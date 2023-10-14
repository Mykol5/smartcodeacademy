// JavaScript to fetch and display lectures
document.addEventListener('DOMContentLoaded', async () => {
    try {

        // Get the authentication token from wherever it's stored (e.g., localStorage)
        const token = localStorage.getItem('authToken');

        console.log('Authentication Token:', token); // Log the authentication token

        // Fetch lecture data from the server
        const lectureResponse = await fetch('https://smartcodebase.onrender.com/api/user-progress/lectures', {
            headers: {
                'Authorization': `Bearer ${token}` // Replace with your authentication token
            }
        });

        console.log('Lecture Response:', lectureResponse);

        if (lectureResponse.ok) {
            const lectureData = await lectureResponse.json();

            console.log('Lecture Data:', lectureData); // Log the lecture data

            const lectureList = document.getElementById('lecture-list');

            // Loop through the lectures and create list items
            lectureData.forEach((lecture) => {
                const listItem = document.createElement('li');
                const lectureLink = document.createElement('a');
                lectureLink.textContent = lecture.lecture_name;
                // lectureLink.href = `/client/assignment1.html`;
                lectureLink.href = `/client/${lecture.lecture_name.replace(/\s+/g, '-').toLowerCase()}.html`;


                // Check if the lecture is completed and add a badge or styling
                if (lecture.completed) {
                    // Lecture is completed, you can add a "Completed" badge
                    const completedBadge = document.createElement('span');
                    completedBadge.textContent = 'Completed';
                    completedBadge.classList.add('completed-badge');
                    listItem.appendChild(completedBadge);
                } else {
                    // Lecture is not completed, you can add a "Not Completed" badge or styling
                    const notCompletedBadge = document.createElement('span');
                    notCompletedBadge.textContent = 'Not Completed';
                    notCompletedBadge.classList.add('not-completed-badge');
                    listItem.appendChild(notCompletedBadge);
                }

                listItem.appendChild(lectureLink);
                lectureList.appendChild(listItem);
            });
        } else {
            console.error('Failed to fetch lectures');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});









// INSERT INTO user_lectures (user_id, lecture_name, completed)
// VALUES ('dcd41996-091f-45da-9c27-929efd16d68a', 'Introduction to CSS', false);


// ALTER TABLE assignments
// ADD COLUMN due_date DATE;


// UPDATE assignments
// SET due_date = '2023-09-15' -- Replace with the actual due date
// WHERE assignment_name = 'Assignment 1'; -- Replace with the assignment name



// INSERT INTO assignments (title) VALUES ('HTML Assignment 1');

// -- Insert an assignment for a specific user (replace user_id and assignment_name)
// INSERT INTO user_assignments (user_id, assignment_name, completed)
// VALUES ('dcd41996-091f-45da-9c27-929efd16d68a', 'HTML Assignment 1', false);


// SELECT * FROM assignments;

// INSERT INTO assignments (title, assignment_name, description, due_date)---------this is not useful
// VALUES ('Assignment 1', 'HTML Assignment 1', 'Description of Assignment 1', '2023-10-15'),
//        ('Assignment 2', 'CSS Assignment 1', 'Description of Assignment 2', '2023-10-20'),
//        ('Assignment 3', 'JavaScript Assignment 1', 'Description of Assignment 3', '2023-10-25');-------this is not useful



// -- Insert the assignment into the assignments table first
// INSERT INTO assignments (title, assignment_name, description)
// VALUES ('HTML Assignment 2', 'HTML Assignment 2', 'Description for HTML Assignment 2');



// INSERT INTO user_assignments (user_id, assignment_name, due_date, completed)
// VALUES ('dcd41996-091f-45da-9c27-929efd16d68a', 'HTML Assignment 2', '2023-10-20', false);


// CREATE TABLE grades (
//     id SERIAL PRIMARY KEY,
//     user_id INTEGER NOT NULL,
//     assignment_name VARCHAR(255) NOT NULL,
//     grade VARCHAR(10),
//     FOREIGN KEY (user_id) REFERENCES users(id)
//  );
 
// -- Insert a grade for a user and assignment with a UUID user_id
// INSERT INTO grades (user_id, assignment_name, grade)
// VALUES ('dcd41996-091f-45da-9c27-929efd16d68a', 'HTML Assignment 1', '80');


// CREATE TABLE notifications (
//     id SERIAL PRIMARY KEY,
//     user_id UUID NOT NULL,
//     message TEXT NOT NULL,
//     link TEXT,
//     timestamp TIMESTAMPTZ DEFAULT NOW()
//   );
  




// INSERT INTO notifications (user_id, message, link)
// VALUES ('dcd41996-091f-45da-9c27-929efd16d68a', 'New Assignment Posted: Assignment 3', '/assignment3.html');



// DELETE FROM assignments
// WHERE assignment_name IN ('HTML Assignment 1', 'CSS Assignment 1', 'JavaScript Assignment 1');









// // JavaScript to fetch and display lectures and assignments
// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         // Fetch user's lecture progress from the server
//         const lectureResponse = await fetch('/user-progress/lectures', {
//             headers: {
//                 'Authorization': `Bearer ${yourAuthToken}` // Replace with your authentication token
//             }
//         });

//         if (lectureResponse.ok) {
//             const lectureData = await lectureResponse.json();
//             const lectureList = document.getElementById('lecture-list');

//             // Loop through the lectures and create list items
//             lectureData.forEach((lecture) => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = lecture.lecture_name;

//                 // Check if the lecture is completed and add a button
//                 if (lecture.completed) {
//                     listItem.classList.add('completed');
//                 } else {
//                     const completeButton = document.createElement('button');
//                     completeButton.textContent = 'Mark as Completed';
//                     completeButton.addEventListener('click', async () => {
//                         // Send a request to mark the lecture as completed
//                         const markCompletedResponse = await fetch('/user-progress/lectures', {
//                             method: 'PUT',
//                             headers: {
//                                 'Content-Type': 'application/json',
//                                 'Authorization': `Bearer ${yourAuthToken}`
//                             },
//                             body: JSON.stringify({ lectureName: lecture.lecture_name, completed: true })
//                         });

//                         if (markCompletedResponse.ok) {
//                             listItem.classList.add('completed');
//                             completeButton.remove();
//                         } else {
//                             console.error('Failed to mark lecture as completed');
//                         }
//                     });

//                     listItem.appendChild(completeButton);
//                 }

//                 lectureList.appendChild(listItem);
//             });
//         } else {
//             console.error('Failed to fetch lectures');
//         }

//         // Fetch user's assignment progress from the server and follow a similar approach
//     } catch (error) {
//         console.error('Error:', error);
//     }
// });



