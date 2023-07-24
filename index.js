// Modules
const express = require('express');
const ejs = require('ejs');
const pg = require('pg');

// Express Boilerplate
const app = express();
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
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
        console.log(customHeader + " not found");
    }


    // Check if config file exists
    if(config){
        // If it does, render the page
        // To-do :)
    }
    else {
        // If it doesn't, render the error page
        res.render('error.html', {error: "404", reason: "Legs Error: 1"});
    }
});

// Express Listener
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});