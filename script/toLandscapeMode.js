// Function to check if the device is in portrait mode
function isPortrait() {
    return window.innerWidth < window.innerHeight;
  }
  
  // Function to show/hide the pop-up based on device orientation
  function checkOrientation() {
    if (isPortrait()) {
      // Device is in portrait mode, show the pop-up
      document.getElementById("landscape-popup").style.display = "flex";
    } else {
      // Device is in landscape mode, hide the pop-up
      document.getElementById("landscape-popup").style.display = "none";
    }
  }
  
  // Initial check when the page loads
  checkOrientation();
  
  // Listen for orientation change events
  window.addEventListener("orientationchange", checkOrientation);
  
  // Listen for window resize events (in case the user rotates the device)
  window.addEventListener("resize", checkOrientation);
  