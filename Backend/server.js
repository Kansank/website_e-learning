import express from 'express';
import data from './data.js';
const app = express()


app.get('/', (req, res) => {
  res.send(data.courses);
})
const port = 5000;
app.listen(5000, () => {
  console.log(`Start server at port ${port}.`)
})