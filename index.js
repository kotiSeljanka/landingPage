const express = require('express');
const app = express();
const PORT = 3000;

const path = require('path');


app.get('/', function(req, res) {
    res.send("It's happening! It woorks!!");
});

app.get('/wibbly', function(req, res) {
    res.sendFile(path.join(__dirname, '/home/game.html'));
});


app.listen(PORT, function(err) {
    if (err) console.log("Error!");
    console.log(`Listening to ${PORT}`);
});
