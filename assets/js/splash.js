// Function to show main content and remove splash screen
function showMainContent() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('splash-screen').remove(); // Remove splash screen
}

// Function to play sound when splash screen is displayed
function playSplashSound() {
    var audio = document.getElementById('splash-sound');
    audio.play();
}

// Show splash screen
document.getElementById('splash-screen').style.display = 'flex';

// Play sound and hide splash screen after a delay (e.g., 3 seconds)
playSplashSound();
setTimeout(showMainContent, 3000); // Adjust the delay as needed
