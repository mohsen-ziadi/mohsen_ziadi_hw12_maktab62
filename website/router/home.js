const express = require('express');
const router = express.Router();
const path = require("path");
const producteJSON = require("../database/products.json");

router.get("/", (req, res) => {
    res.render("home", { data: producteJSON, i: 0 });
    // res.send("hello")
})

router.get("/contact", (req, res) => {
    res.render("contact", { data: producteJSON });
    // res.send("hello")
})

router.get("/about", (req, res) => {
    res.render("about", { data: producteJSON });
    // res.send("hello")
})

router.get("/producteJSON[]", (req, res) => {
    res.render("about", { data: producteJSON });
    // res.send("hello")
})


router.get('/:id', (req, res) => {
    res.render(path.join(__dirname, `../views/${req.params.file}.html`))

})


module.exports = router;