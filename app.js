// app.js
// JavaScript code for handling client-side interactions
// This could include AJAX requests, event listeners, etc.
// Example: Fetching product data from the server
fetch('/products')
    .then(response => response.json())
    .then(data => {
        // Process the data and update the UI
    })
    .catch(error => console.error('Error fetching products:', error));