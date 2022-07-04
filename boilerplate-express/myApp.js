let express = require('express');
let app = express();

console.log("Hello World");

// Routes in Express take the following structure:
// app.METHOD(PATH, HANDLER)
// Where METHOD is an http request
// PATH is a relative path on the server str or RE
// HANDLER is a function that Express calls when the reoute is matched
// Handlers take the form function(req, res){...}

// handler example:

// function(req, res){
//     res.send('Response String');
// }

app.get('/', (req, res)=>{
    res.send('Hello Express');
});

module.exports = app;
