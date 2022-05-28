

if (process.env.NODE_ENV !== 'production') { // we dont want to load up this envirornment variable unless we are in our development enviornment
    require('dotenv').config() // load up dependecies
  }
  
  const express = require('express')
  const app = express()
  const expressLayouts = require('express-ejs-layouts')

  const indexRouter = require('./routes/index') // require the index route from our routes folder....this imports this route into our server so it knows it exist
  
  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/views') //gets the current directorys name and appends to the views folder.....this is a folder for all of our server rendered veiws
  app.set('layout', 'layouts/layout') // every file put inside this layout file inside a layout folder 
  app.use(expressLayouts) //Use express layouts variable that we included from the library
  app.use(express.static('public')) //Telling Xpress to put our style sheets and images and public files in a folder called public
  
  const mongoose = require('mongoose') // imports mongose from the lirbrary we installed
  mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }) // Putting the url in for our enviornment connceting to a server on web somewhere
  const db = mongoose.connection
  db.on('error', error => console.error(error)) // logs an error meessage if there is an error
  db.once('open', () => console.log('Connected to Mongoose')) // logs a message once we connect
  
  app.use('/', indexRouter) // from the very root of our application handle the route (our index router)
  
  app.listen(process.env.PORT || 3000)



// notes

// 5/27/22
// npm i --save-dev dotenv this command allows us to use envirnment variables locally

// 5/25/22
// npm run devStart fires up the server
// 
// ----keyboard shortcuts---
// command + k clears terminal? no

// 5/19/22
  // routes folder holds all of our controllers aka routes aka what communicates to the model and view handleing requests and responses
//Model handles all the data base interactions and saving
//View handles all the displayed information or sends back errors to display if somthing is wrong

// JHVKGV