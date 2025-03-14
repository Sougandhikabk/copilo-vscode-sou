// Create web server
// Create a path for comments
// Handle POST requests to add new comments
// Handle GET requests to return all comments

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const comments = [];

app.post('/comments', (req, res) => {
  // Extract the comment from the request body
  const comment = req.body.comment;
  // Add the comment to the comments array
  comments.push(comment);
  // Send back the comment
  res.json(comment);
});

app.get('/comments', (req, res) => {
  // Send back all the comments
  res.json(comments);
});

app.listen(4001, () => {
  console.log('Comments service started on port 4001');
});

// Run the server
// node comments.js

// Test the server
// curl -X POST -H "Content-Type: application/json" -d '{"comment": "This is a comment!"}' http://localhost:4001/comments
// curl http://localhost:4001/comments

// To run multiple services on the same machine, you can specify different ports for each service. 
// You can then use the same commands to test each service, but with different port numbers.