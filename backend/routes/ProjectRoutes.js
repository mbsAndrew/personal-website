//Github
require("dotenv").config();
const fetch = require("node-fetch");
const { GITHUB_KEY, GITHUB_SECRET, GITHUB_ACCESS } = process.env;
const express = require("express");
const router = express.Router();
const baseURL = "https://api.github.com/";


//may need middleware to get auth
router.get("/", async (req, res) => {
    const profile = await gitProfile();    
    const repos = await gitRepos(profile.data.repos_url);    
    res.send({ user: profile, repos: repos});
});

async function gitRepos(reposURL) {
    console.log("reposURL", reposURL);
    return new Promise((res, rej) => {
        fetch(reposURL)
        .then(data => data.json())
        .then(response => {
            console.log(response);
            res({data: response, status: 200});
        })
    });
}


async function gitProfile() {
    console.log("Hello?");
    return new Promise((res, rej) => {
        fetch(`${baseURL}users/${GITHUB_KEY}`, {
            headers: {
                "User-Agent": GITHUB_KEY,
                "Authorization": `token ${GITHUB_ACCESS}`
            }
        })
        .then(data => data.json())
        .then(response => {
            console.log(response);
            res({ data: response, status: 200});
        })
    })
}


module.exports = router;