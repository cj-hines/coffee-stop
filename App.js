/*
Final Project
*/

//Node modules to *require*
//if these cause errors, be sure you've installed them, ex: 'npm install express'
const express = require('express');
const app = express();
const path = require('path');

//specify that we want to run our website on 'http://localhost:8000/'
const host = 'localhost';
const port = 8000;

var publicPath = path.join(__dirname, 'public'); //get the path to use our "public" folder where we stored our html, css, images, etc
app.use(express.static(publicPath));  //tell express to use that folder



//here's where we specify what to send to users that connect to our web server...
//if there's no url extension, it will show "index.html"
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/"));
});

// -- URL NAVIGATION -- //
//depending on what url extension the user navigates to, send them the respective html file. 

/** You can add your own URLS here **/

app.get('/home', function (req, res) {
    res.sendFile(publicPath + '/homepage.html');
});
app.get('/customdrink', function (req, res) {
    res.sendFile(publicPath + '/customdrink.html');
});

app.get('/map', function (req, res) {
    res.sendFile(publicPath + '/map.html');
});
app.get('/history', function (req, res) {
    res.sendFile(publicPath + '/history.html');
});

app.get('/add', function (req, res) {
    res.sendFile(publicPath + '/adddrink.html');
});

app.get('/show-new-drink', function (req, res) {
    res.sendFile(publicPath + '/show-new-drink.html');
});

app.get('/show-caramel-latte', function (req, res) {
    res.sendFile(publicPath + '/show-caramel-latte.html');
});

app.get('/show-cappucino', function (req, res) {
    res.sendFile(publicPath + '/show-cappucino.html');
});

app.get('/show-espresso', function (req, res) {
    res.sendFile(publicPath + '/show-espresso.html');
});

//run this server by entering "node App.js" using your command line. 
   app.listen(port, () => {
     console.log(`Server is running on http://${host}:${port}`);
   });



