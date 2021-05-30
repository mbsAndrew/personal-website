//Github
require("dotenv").config();
const fetch = require("node-fetch");
const { GITHUB_KEY, GITHUB_SECRET, GITHUB_ACCESS } = process.env;
const express = require("express");
const router = express.Router();
const baseURL = "https://api.github.com/";

const options = {
    headers: {
        "User-Agent": GITHUB_KEY,
        "Authorization": `token ${GITHUB_ACCESS}`
    }
}


//may need middleware to get auth
router.get("/", async (req, res) => {
    const profile = await gitProfile();    
    const repos = await gitRepos(profile.data.repos_url); 
    const commits = await gitCommits(repos.data);      
    const finalCommits = commits.map(m => m.data).flat();
    res.send({ user: profile, repos: repos, commits: finalCommits});
});

router.get("/languages/:name", async (req, res) => {
    const { name } = req.params;    
    const langs = await repoLanguages(name);
    res.send({ languages: langs});
});

async function repoLanguages(name) {
    return new Promise((res, rej) => {
        fetch(`${baseURL}repos/${GITHUB_KEY}/${name}/languages`, options)
        .then(data => data.json())
        .then(response => {
            console.log("languages", response);
            res({ data: response, status: 200});
        })
    });
};

async function gitCommits(array) {    
    return Promise.all([...array.map(item => {
        return new Promise((res, rej) => {
            fetch(item.commits_url.replace("{/sha}", ""), options)
            .then(data => data.json())
            .then(response => {                                
                res({data: response, status: 200});
            })
        })
    })])
}

async function gitRepos(reposURL) {
    console.log("reposURL", reposURL);
    return new Promise((res, rej) => {
        fetch(reposURL, options)
        .then(data => data.json())
        .then(response => {            
            res({data: response, status: 200});
        })
    });
}


async function gitProfile() {    
    return new Promise((res, rej) => {
        fetch(`${baseURL}users/${GITHUB_KEY}`, options)
        .then(data => data.json())
        .then(response => {            
            res({ data: response, status: 200});
        })
    })
}


module.exports = router;