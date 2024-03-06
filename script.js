// Check if the browser supports the Battery Status API
if ('getBattery' in navigator) {
    navigator.getBattery().then(function(battery) {
        // Update battery percentage
        updateBatteryPercentage(battery);
        
        // Listen for changes in battery status
        battery.addEventListener('levelchange', function() {
            updateBatteryPercentage(battery);
        });
    });
}

function updateBatteryPercentage(battery) {
    var batteryStatus = document.getElementById('battery-percentage');
    batteryStatus.textContent = (battery.level * 100).toFixed(0) + '%';
}






// Function to update CPU usage
function updateCPUUsage() {
    var cpuElement = document.getElementById('cpu-usage');

    // Calculate CPU usage by running a heavy computation
    var start = new Date().getTime();
    var sum = 0;
    for (var i = 0; i < 1000000; i++) {
        sum += Math.random();
    }
    var end = new Date().getTime();
    var elapsed = end - start;

    // CPU usage calculation: elapsed time / total time
    var cpuUsage = ((elapsed / 1000) * 100).toFixed(2);

    cpuElement.textContent = cpuUsage + '%'; // Update the text content with CPU usage
}

// Call the update function initially and at intervals
updateCPUUsage(); // Initial call
setInterval(updateCPUUsage, 700); // Update every 5 seconds (adjust as needed)









function getUserIP() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        // Update the HTML element with the user's IP address
        document.getElementById('user-ip').textContent = data.ip;
      })
      .catch(error => {
        console.error('Error fetching user IP:', error);
      });
  }

  // Call the function to get the user's IP address when the page loads
  window.addEventListener('load', getUserIP);
  






// Function to fetch user's geolocation
function getUserGeolocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // Update the HTML element with the user's geolocation
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        document.getElementById('user-geolocation').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
      }, function(error) {
        console.error('Error fetching user geolocation:', error.message);
        document.getElementById('user-geolocation').textContent = 'Geolocation not available';
      });
    } else {
      console.error('Geolocation not supported');
      document.getElementById('user-geolocation').textContent = 'Geolocation not supported';
    }
  }

  // Call the function to get the user's geolocation when the page loads
  window.addEventListener('load', getUserGeolocation);








// Show the preloader when the page starts loading
window.addEventListener('load', function() {
  document.getElementById('preloader').style.display = 'block';
  document.getElementById('main').style.display = 'none';
});

// Hide the preloader after 1 second delay
setTimeout(function() {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('main').style.display = 'block';
}, 1500); // Adjust the delay as needed (in milliseconds)


