const express = require('express');
const router = express.Router();
const path = require("path");
const producteJSON = require("../database/products.json");
let i;


router.get("/", (req, res) => {
    res.render("home", { data: producteJSON, i })
        // res.send("hello")
})

router.get("/contact", (req, res) => {
    res.render("contact", { data: producteJSON, i });
    // res.send("hello")
})

router.get("/about", (req, res) => {
    res.render("about", { data: producteJSON, i });
    // res.send("hello")
})

router.get("/product/:id", (req, res) => {
    res.render("product", { data: producteJSON, i: req.params.id });
    // res.send("hello")
})





module.exports = router;