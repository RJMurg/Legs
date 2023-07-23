// Modules
const express = require('express');
const pg = require('pg');

// Express Boilerplate
const app = express();
app.use(express.static(__dirname + '/public'));
const port = 3000;

// Postgres Boilerplate
// To-do later :)

// Express Routes
app.get('/', (req, res) => {
    // Read the custom header
    const customHeader = req.headers['Legs-SSR-Site'];
    var config = null;
    
    // Look for config file with the same name
    try{
        config = require(`./config/${customHeader}.json`);
    }
    catch(err){
        console.log(err);
    }


    // Check if config file exists
    if(config){
        // If it does, render the page
        // To-do :)
    }
    else {
        // If it doesn't, render the 404 page
        res.sendFile('public/404.html', {root: __dirname});
    }
});

// Express Listener
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});