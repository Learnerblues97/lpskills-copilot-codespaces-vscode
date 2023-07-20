// Create web server and listen on port 3000

const express = require('express');
const app = express();
const port = 3000;

// Import comments.js
const comments = require('./comments.js');

// Use comments.js
app.use('/comments', comments);

// Start web server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
