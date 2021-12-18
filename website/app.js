const express = require("express");
const app = express();
const router = require('./router/home.js');
const path = require('path');
const port = 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.use('/', router);
app.use((req, res) => {
    res.status(404);
    res.render("404")
});

app.listen(port);

console.log(`server runing in port: ${port}`);