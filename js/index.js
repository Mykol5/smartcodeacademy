// Check user authentication status when the page loads
document.addEventListener('DOMContentLoaded', async function () {
    try {
      // Retrieve the authentication token from localStorage
      const token = localStorage.getItem('authToken');
      const username = localStorage.getItem('username');
      
      console.log('User first name:', username); // Add this line to check the retrieved first name
      console.log('User token:', token); // Add this line to check the retrieved first name

                // Update the user greeting in the dashboard
                const userGreeting = document.querySelector('.user-greeting p');
                userGreeting.textContent = `Welcome, ${username || 'User'}!`;

      if (!token) {
        // If the token is not available, redirect to the login page
        window.location.href = '/login.html'; // Replace with your login page URL
        return;
      }
  
      // Create headers with the authentication token
      const headers = {
        'Authorization': `Bearer ${token}`, // Include the token
        'Content-Type': 'application/json', // Set the content type if required
      };
  
    //   // Make a GET request to the /check-auth endpoint with headers
    //   const response = await fetch('https://smartcodebase.onrender.com/api/check-auth', {
    //     headers: headers,
    //   });
  
      if (response.ok) {
        // User is authenticated, parse the response JSON
        // const data = await response.json();
        if (data.isAuthenticated) {
        //   const username = data.username;

        } else {
          // User is not authenticated, handle it accordingly
          // For example, redirect to the login page
        //   window.location.href = '/client/login.html'; // Replace with your login page URL
        }
      } else {
        // Handle other response statuses if needed
      }
    } catch (error) {
    //   console.error('Error checking authentication:', error);
      // Handle errors as needed
    }
  });
  
  // Add other dashboard functionality here
// // Initialize an EventSource to connect to the SSE endpoint
// const eventSource = new EventSource('https://smartcodebase.onrender.com/sse-profile-updates');

// // Event listener for profile updates
// eventSource.addEventListener('message', (event) => {
//   const eventData = JSON.parse(event.data);
  
//   // Log the received event data
//   console.log('Received SSE event:', eventData);

//   if (eventData.firstName) {
//     // Update the user's name in the UI
//     const userNameElement = document.getElementById('user-name');

//         // Log to check if the element is correctly selected
//         console.log('User name element:', userNameElement);

//         // Log to check the value of eventData.firstName
//         console.log('Received first name:', eventData.firstName);


//     userNameElement.textContent = eventData.firstName;
//   }
// });

// // Handle SSE connection errors
// eventSource.addEventListener('error', (error) => {
//   console.error('SSE connection error:', error);
// });


// Function to update the user interface with user data
function updateUIWithUserData(userData) {
  // Update the user's name in the UI
  const userNameElement = document.getElementById('user-name');
  userNameElement.textContent = userData.firstName;

  // You can similarly update other profile information as needed
}

// Initialize an EventSource to connect to the SSE endpoint
const eventSource = new EventSource('https://smartcodebase.onrender.com/sse-profile-updates');

// Event listener for profile updates
eventSource.addEventListener('message', (event) => {
  const eventData = JSON.parse(event.data);

  if (eventData.firstName) {
    // Update the user's name in the UI
    updateUIWithUserData(eventData);
  }
});

// Handle SSE connection errors
eventSource.addEventListener('error', (error) => {
  console.error('SSE connection error:', error);
});





  
  // Function to toggle the sidebar and hamburger menu icon
  function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const closeToggle = document.getElementById('closeToggle');
  
    sidebar.classList.toggle('open');
    menuToggle.classList.toggle('hidden');
    closeToggle.classList.toggle('hidden');
  }
  
  // Get the hamburger menu element and add a click event listener
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('click', toggleSidebar);
  
  // JavaScript to switch images every 5 seconds
  const gallery = document.getElementById('imageGallery');
  const images = ['img/WhatsApp Image 2023-10-17 at 1.29.34 PM.jpeg', 'img/WhatsApp Image 2023-10-17 at 1.30.17 PM.jpeg', 'img/WhatsApp Image 2023-10-17 at 1.30.18 PM.jpeg', 'img/WhatsApp Image 2023-10-17 at 1.30.18 PM (2).jpeg'];
  let currentIndex = 0;
  
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const imageUrl = images[currentIndex];
    const imgElement = gallery.querySelector('img');
  
    imgElement.style.opacity = 0; // Fade out
    setTimeout(function () {
      imgElement.src = imageUrl; // Change image source
      imgElement.style.opacity = 1; // Fade in
    }, 500);
  }
  
  setInterval(changeImage, 5000); // Change image every 5 seconds
  







// // Check user authentication status when the page loads
// document.addEventListener('DOMContentLoaded', async function () {
//   try {
//     // Make a GET request to the /check-auth endpoint
//     const response = await fetch('https://smartcodebase.onrender.com/api/check-auth');

//     if (response.ok) {
//       // User is authenticated, parse the response JSON
//       const data = await response.json();
//       if (data.isAuthenticated) {
//         const username = data.username;
//         // Update the user greeting in the dashboard
//         const userGreeting = document.querySelector('.user-greeting p');
//         userGreeting.textContent = `Welcome, ${username}!`;
//       }
//     } else {
//     //   // User is not authenticated, handle it accordingly
//     //   // For example, redirect to the login page
//     //   window.location.href = '/client/login.html'; // Replace with your login page URL
//     }
//   } catch (error) {
//     console.error('Error checking authentication:', error);
//     // Handle errors as needed
//   }
// });


//     // Add other dashboard functionality here
  
//     // Function to toggle the sidebar and hamburger menu icon
//     function toggleSidebar() {
//         const sidebar = document.getElementById('sidebar');
//         const menuToggle = document.getElementById('menuToggle');
//         const closeToggle = document.getElementById('closeToggle');
    
//         sidebar.classList.toggle('open');
//         menuToggle.classList.toggle('hidden');
//         closeToggle.classList.toggle('hidden');
//       }
    
//       // Get the hamburger menu element and add a click event listener
//       const menuToggle = document.getElementById('menuToggle');
//       menuToggle.addEventListener('click', toggleSidebar);
    
//       // JavaScript to switch images every 5 seconds
//       const gallery = document.getElementById('imageGallery');
//       const images = ['img/images (5).jpeg', 'img/images (7).jpeg', 'img/images (9).jpeg', 'img/images (11).jpeg'];
//       let currentIndex = 0;
    
//       function changeImage() {
//         currentIndex = (currentIndex + 1) % images.length;
//         const imageUrl = images[currentIndex];
//         const imgElement = gallery.querySelector('img');
    
//         imgElement.style.opacity = 0; // Fade out
//         setTimeout(function () {
//           imgElement.src = imageUrl; // Change image source
//           imgElement.style.opacity = 1; // Fade in
//         }, 500);
//       }
    
//       setInterval(changeImage, 5000); // Change image every 5 seconds







// document.addEventListener('DOMContentLoaded', function () {

//     fetch('https://smartcodebase.onrender.com/api/check-auth')
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         console.error('Authentication failed. Response status:', response.status);
//         throw new Error('Authentication failed');
//       }
//     })
//     .then((data) => {
//       if (data.isAuthenticated) {
//         // User is authenticated; you can access data.username
//         console.log('User is authenticated. Username:', data.username);
//       } else {
//         // User is not authenticated
//         console.error('User is not authenticated.');
//       }
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
  
    // // Add other dashboard functionality here
  
    // // Function to toggle the sidebar and hamburger menu icon
    // function toggleSidebar() {
    //   const sidebar = document.getElementById('sidebar');
    //   const menuToggle = document.getElementById('menuToggle');
    //   const closeToggle = document.getElementById('closeToggle');
  
    //   sidebar.classList.toggle('open');
    //   menuToggle.classList.toggle('hidden');
    //   closeToggle.classList.toggle('hidden');
    // }
  
    // // Get the hamburger menu element and add a click event listener
    // const menuToggle = document.getElementById('menuToggle');
    // menuToggle.addEventListener('click', toggleSidebar);
  
    // // JavaScript to switch images every 5 seconds
    // const gallery = document.getElementById('imageGallery');
    // const images = ['img/images (5).jpeg', 'img/images (7).jpeg', 'img/images (9).jpeg', 'img/images (11).jpeg'];
    // let currentIndex = 0;
  
    // function changeImage() {
    //   currentIndex = (currentIndex + 1) % images.length;
    //   const imageUrl = images[currentIndex];
    //   const imgElement = gallery.querySelector('img');
  
    //   imgElement.style.opacity = 0; // Fade out
    //   setTimeout(function () {
    //     imgElement.src = imageUrl; // Change image source
    //     imgElement.style.opacity = 1; // Fade in
    //   }, 500);
    // }
  
    // setInterval(changeImage, 5000); // Change image every 5 seconds
  
    // // Function to perform login and fetch the username from the server
    // async function performLogin() {
    //   try {
    //     const user_id = 'your_user_id'; // Replace with the user ID for login
    //     const response = await fetch('https://smartcodebase.onrender.com/api/login', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({ user_id }),
    //     });
  
    //     if (!response.ok) {
    //       throw new Error('Login failed');
    //     }
  
    //     return response.json();
    //   } catch (error) {
    //     throw error;
    //   }
    // }
//   });
  











// document.addEventListener('DOMContentLoaded', function () {
//     // Check if the user is authenticated and retrieve the username from the response data
//     const isAuthenticated = true; // Replace with your authentication logic
//     const username = 'John Doe'; // Replace with the retrieved username

//     const userGreeting = document.querySelector('.user-greeting p');

//     if (isAuthenticated) {
//         userGreeting.textContent = `Welcome, ${username}!`;
//     } else {
//         // Handle the case when the user is not authenticated (e.g., redirect to login page)
//     }
    
//     // Add other dashboard functionality here

//     // Function to toggle the sidebar and hamburger menu icon
// function toggleSidebar() {
//     const sidebar = document.getElementById('sidebar');
//     const menuToggle = document.getElementById('menuToggle');
//     const closeToggle = document.getElementById('closeToggle');
    
//     sidebar.classList.toggle('open');
//     menuToggle.classList.toggle('hidden');
//     closeToggle.classList.toggle('hidden');
// }

// // Get the hamburger menu element and add a click event listener
// const menuToggle = document.getElementById('menuToggle');
// menuToggle.addEventListener('click', toggleSidebar);





// // JavaScript to switch images every 5 seconds
// const gallery = document.getElementById('imageGallery');
// const images = ['img/images (5).jpeg', 'img/images (7).jpeg', 'img/images (9).jpeg', 'img/images (11).jpeg'];
// let currentIndex = 0;

// function changeImage() {
//     currentIndex = (currentIndex + 1) % images.length;
//     const imageUrl = images[currentIndex];
//     const imgElement = gallery.querySelector('img');
    
//     imgElement.style.opacity = 0; // Fade out
//     setTimeout(function() {
//         imgElement.src = imageUrl; // Change image source
//         imgElement.style.opacity = 1; // Fade in
//     }, 500);
// }

// setInterval(changeImage, 5000); // Change image every 5 seconds




// // Replace 'html-code' with the actual textarea ID
// const htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-code'), {
//     lineNumbers: true,  // Show line numbers
//     mode: 'htmlmixed',  // Set the mode (HTML with mixed content)
// });


// });











// // Toggle the sidebar when the hamburger menu is clicked
// document.getElementById('menuToggle').addEventListener('click', function () {
//     const sidebar = document.getElementById('sidebar');
//     sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
// });

