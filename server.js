const express = require('express');
const app = express();
const cors = require('cors');
const apiUrl = '/api/posts';
app.use(cors());
app.listen(8000,(req, res) => {
  console.log('Server is running 8000 port')
});

app.route(apiUrl).get((req, res) =>{
  console.log("call get api");
 // res.status(200).send("call get api").json;
});

app.route(apiUrl).post((req, res) =>{
  console.log("call post api");
  res.send("call post api");
});
