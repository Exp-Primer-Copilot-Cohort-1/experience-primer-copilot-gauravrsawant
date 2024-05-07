// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create a comment
app.post('/comments', function(req, res) {
  var comment = req.body.comment;
  var author = req.body.author;
  var comment = {
    comment: comment,