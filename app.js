const express = require('express')
const { json, urlencoded } = require('body-parser')
const users = require('./routes/user')
var app = express()
const port = 3000

app.use(json())
app.use(
  urlencoded({
    extended: true
  }))

app.use("/users", users)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})