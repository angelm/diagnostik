"use strict";

const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');

const port = process.env.PORT || 8080;


app.use(cookieParser());
app.use(express.static(__dirname + "/public"));


app.use((req, res, next) => {
    const reqUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    const cookies = req.cookies;
    res.send("<h1>Diagnostik</h1><br/><b>Url:</b> " + reqUrl + "<br/><b>Cookies:</b> " + JSON.stringify(cookies));
});

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});

module.exports = app;


