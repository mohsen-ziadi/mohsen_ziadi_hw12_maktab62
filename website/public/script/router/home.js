const express = require('express');
const router = express.Router();
// const path = require("path");
// const producteJSON = require("../database/products.json");

router.get("/", (req, res) => {
    // req.render("home");
    req.send("hello")
})

module.exports = router;