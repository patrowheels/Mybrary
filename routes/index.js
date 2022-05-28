const express = require('express')
const router = express.Router() // this variable connects to the indexRouter we required in the server.js .... aka our route hooking up with our server

router.get('/', (req, res) => {
  res.render('index')  //this renders our view by name
})

module.exports = router // you have to export the router file to the application server

