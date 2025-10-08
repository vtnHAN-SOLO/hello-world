const express = require("express")

// create express app's instance
const app = express()

// help working with files and directories
const path = require('path')

//middleware to serve the static files
app.use(express.static(path.join(__dirname, 'hello_me')))

const port = 3000
app.listen(port, () =>{
    console.log("The server is running")
})