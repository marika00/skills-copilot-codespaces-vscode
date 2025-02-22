// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route that the client can access
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

// Run in terminal: node comments.js
// Open browser and go to http://localhost:3000/comments