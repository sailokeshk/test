
//b. Write a program to develop a small website with multiple routes using Express. js
const express = require('express');
const app = express();
const port = 3010;

// Route for the home page
app.get('/', (req, res) => {
  res.send('<h1>Welcome to the Home Page</h1><p>This is the main page of the website.</p>');
});

// Route for the about page
app.get('/about', (req, res) => {
  res.send('<h1>About Us</h1><p>This page tells you about our website.</p>');
});

// Route for the contact page
app.get('/contact', (req, res) => {
  res.send('<h1>Contact Us</h1><p>You can contact us at contact@example.com.</p>');
});

// Route for a services page
app.get('/services', (req, res) => {
  res.send('<h1>Our Services</h1><p>Here are the services we offer.</p>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
