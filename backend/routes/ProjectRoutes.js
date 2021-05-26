//Github
import Github from 'github-api';
require("dotenv").config();
const { GITHUB_KEY, GITHUB_SECRET } = process.env;
const express = require("express");
const router = express.Router();

const gh = new Github({
    username: GITHUB_KEY,
    password: GITHUB_SECRET
});

console.log(gh);

//may need middleware to get auth
router.get("/", (req, res) => {

})


module.exports = router;