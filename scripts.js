'use strict';

// Import the renderScripts module
const renderScripts = require('./render-scripts');

// Execute the function
renderScripts();
// Function to toggle the user login/signup modal
const loginButton = document.querySelector('#login-btn');
const signupButton = document.querySelector('#signup-btn');
const loginModal = document.querySelector('#login-modal');
const signupModal = document.querySelector('#signup-modal');
const closeLoginModal = document.querySelector('#close-login');
const closeSignupModal = document.querySelector('#close-signup');

// Show login modal
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

// Show signup modal
signupButton.addEventListener('click', () => {
    signupModal.style.display = 'block';
});

// Close login modal
closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

// Close signup modal
closeSignupModal.addEventListener('click', () => {
    signupModal.style.display = 'none';
});

// Example: Toggle pet grooming appointment schedule form
const scheduleButton = document.querySelector('#schedule-btn');
const groomingForm = document.querySelector('#grooming-form');

// Show grooming form
scheduleButton.addEventListener('click', () => {
    groomingForm.style.display = 'block';
});

// Handle Appointment Form submission (Example)
const groomingFormSubmit = document.querySelector('#grooming-form-submit');
groomingFormSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // Collect grooming appointment data
    const petName = document.querySelector('#pet-name').value;
    const groomingTime = document.querySelector('#grooming-time').value;
    
    // Example: Show a success message
    alert(`Appointment for ${petName} at ${groomingTime} scheduled!`);

    // Here, you would save the data to the database via Supabase or other APIs
});

// Real-time messaging with the vet (simplified version)
const chatForm = document.querySelector('#chat-form');
const messageInput = document.querySelector('#message-input');
const messageContainer = document.querySelector('#message-container');

// Send message
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    if (message.trim() !== '') {
        // Append the message to the container
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message');
        messageElement.textContent = message;
        messageContainer.appendChild(messageElement);
        
        // Clear input
        messageInput.value = '';
        
        // Here, you would send the message to Supabase or another real-time service
    }
});

// Notification system (example)
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = message;

    document.body.appendChild(notification);

    // Add show class to fade in
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

// Example usage:
document.querySelector('#trigger-notification').addEventListener('click', () => {
    showNotification('New message from the vet!');
});
console.log("Login button clicked");
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

