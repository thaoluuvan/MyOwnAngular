const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const apiUrl = '/api/posts';

app.use(cors());
app.use(bodyParser.json());

app.listen(8000,(req, res) => {
  console.log('Server is running 8000 port')
});
// get
app.route(apiUrl).get((req, res) =>{
  console.log("call get api");
  res.status(200).send("call get api");
});
// post
app.route(apiUrl).post((req, res) =>{
  console.log("call post api");
  res.status(200).send({title: req.body.title, author: req.body.author});
  res.end();
});
