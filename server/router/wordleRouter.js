const { findWord, checkWord } = require("./../controller/wordleController.ts");
const express = require("express");
const router = express.Router();

router.get("/", findWord);

router.post("/", checkWord);

module.exports = router;
