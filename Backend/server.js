const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})
const port = 5000;
app.listen(5000, () => {
  console.log(`Start server at port ${port}.`)
})