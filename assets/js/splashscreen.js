// Function to show main content and remove splash screen
function showMainContent() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('splash-screen').remove(); // Remove splash screen
}

// Wait for splash screen animation to complete and then show main content
setTimeout(showMainContent, 3000); // Adjust the delay as needed
