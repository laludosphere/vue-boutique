require('dotenv').config()
const express = require('express');
const path = require('path');
const port = process.env.PORT || '3000';
const { MongoClient } = require('mongodb');
const {user, password} = process.env




const client = new MongoClient(
  `mongodb+srv://${user}:${password}@cluster0.niz0c.mongodb.net/?retryWrites=true&w=majority`
);
client
  .connect()
  .then(() => {
    console.log('connected !');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.static('../client-build'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client-build/index.html'));
});

app.listen(port);