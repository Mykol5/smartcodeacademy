document.addEventListener('DOMContentLoaded', () => {
    // Update profile
    const updateProfileForm = document.getElementById('update-profile-form');
    updateProfileForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      // Extract user data from the form
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const bio = document.getElementById('bio').value;
  
      // Get the authentication token from wherever it's stored (e.g., localStorage)
      const token = localStorage.getItem('authToken');
  
      // Create a FormData object to send the form data
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('bio', bio);
  
      // Get the selected profile picture file input
      const profilePictureInput = document.getElementById('profilePicture');
      if (profilePictureInput.files.length > 0) {
        // Append the selected profile picture file to the FormData
        formData.append('profilePicture', profilePictureInput.files[0]);
      }
  
      // Make a PUT request to update the profile with the token in headers
      try {
        const response = await fetch('https://smartcodebase.onrender.com/api/update-profile', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${token}`,
          },
          body: formData, // Use FormData to send the data
        });
  
        if (response.ok) {
          // Handle success
          console.log('Profile updated successfully');
  
          // Parse the response data
          const responseData = await response.json();
          const updatedUser = responseData.user;
  
          // Update the user's name on the frontend if needed
          // updateUserName(updatedUser.first_name);
  
          // You can similarly update other profile information as needed
        } else {
          // Handle error
          console.error('Error updating profile');
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    });
  
    // Event listener for profile updates
    eventSource.addEventListener('message', (event) => {
      const eventData = JSON.parse(event.data);
  
      if (eventData.firstName) {
        // Update the user's name in the UI
        const userNameElement = document.getElementById('user-name');
        if (userNameElement) {
          userNameElement.textContent = eventData.firstName;
        } else {
          console.error('Element with ID "user-name" not found.');
        }
      }
    });
  });
  










// document.addEventListener('DOMContentLoaded', () => {

//         // Update profile
//         const updateProfileForm = document.getElementById('update-profile-form');
//         console.log('updateProfileForm:', updateProfileForm);
//         updateProfileForm.addEventListener('submit', async (e) => {
//         e.preventDefault();

//         // Extract user data from the form
//         const firstName = document.getElementById('firstName').value;
//         console.log('firstName:', firstName);
//         const lastName = document.getElementById('lastName').value;
//         const bio = document.getElementById('bio').value;

//         // Get the authentication token from wherever it's stored (e.g., localStorage)
//         const token = localStorage.getItem('authToken');

//         // Log the token for debugging
//         console.log('Token:', token);

//         // Make a PUT request to update the profile with the token in headers
//         const response = await fetch('https://smartcodebase.onrender.com/api/update-profile', {
//             method: 'PUT',
//             headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Bearer ${token}`, // Include the authentication token
//             },
//             body: JSON.stringify({ firstName, lastName, bio }),
//         });
    
//         if (response.ok) {
//           // Handle success
//           console.log('Profile updated successfully');
          
//           // Parse the response data
//           const responseData = await response.json();
//           const updatedUser = responseData.user;
    
//         //   // Update the user's name on the frontend
//         //   updateUserName(updatedUser.first_name);
    
//           // You can similarly update other profile information as needed
//         } else {
//           // Handle error
//           console.error('Error updating profile');
//         }
//       });






// });


// // Event listener for profile updates
// eventSource.addEventListener('message', (event) => {
//     const eventData = JSON.parse(event.data);
  
//     if (eventData.firstName) {
//       // Update the user's name in the UI
//       const userNameElement = document.getElementById('user-name');
//       if (userNameElement) {
//         userNameElement.textContent = eventData.firstName;
//       } else {
//         console.error('Element with ID "user-name" not found.');
//       }
//     }
//   });
  










          // // Upload profile picture
        // const uploadPictureForm = document.getElementById('upload-picture-form');
        // uploadPictureForm.addEventListener('submit', async (e) => {
        // e.preventDefault();

        // const profilePicture = document.getElementById('profilePicture').files[0];

        // // Create a FormData object to send the image
        // const formData = new FormData();
        // formData.append('profilePicture', profilePicture);

        // // Make a POST request to upload the profile picture
        // const response = await fetch('https://smartcodebase.onrender.com/api/upload-profile-picture', {
        //     method: 'POST',
        //     body: formData,
        // });

        // if (response.ok) {
        //     // Handle success
        //     console.log('Profile picture uploaded successfully');
        // } else {
        //     // Handle error
        //     console.error('Error uploading profile picture');
        // }
        // });
