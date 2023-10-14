document.addEventListener('DOMContentLoaded', () => {
    // Get the authentication token from wherever it's stored (e.g., localStorage)
    const token = localStorage.getItem('authToken');
  
    // Fetch notifications for the current user
    fetch('https://smartcodebase.onrender.com/api/notifications', {
      headers: {
        'Authorization': `Bearer ${token}` // Replace with your actual authentication token
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Notifications data received:', data);
        const notificationsList = document.getElementById('notifications-list');
  
        // Loop through the notifications data and create list items
        data.notifications.forEach(notification => {
          const listItem = document.createElement('li');
          listItem.innerHTML = `<a href="${notification.link}">${notification.message}</a>`;
          notificationsList.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching notifications:', error);
      });
  });
  