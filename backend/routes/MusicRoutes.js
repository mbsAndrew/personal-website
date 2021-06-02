//Spotify
require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();
const spotifyURL = "https://api.spotify.com";
const spotifyAccounts = "https://accounts.spotify.com";
const { SPOTIFY_KEY, SPOTIFY_SECRET, SPOTIFY_REDIRECT } = process.env;
let accessToken = "";

//may need middleware to get auth
router.get("/", async (req, res, next) => {  
    res.send({ data: "hello!"})  
    res.redirect(authURL());
    next();
    // const played = await recentlyPlayed();
});

router.get("/callback", async (req, res) => {
    console.log("req", req);
    console.log("res", res);
});

function authURL() {
    const base = new URL(spotifyAccounts);
    base.searchParams.append("response_type", "token");
    base.searchParams.append("client_id", SPOTIFY_KEY);
    base.searchParams.append("redirect_uri", encodeURIComponent(SPOTIFY_REDIRECT));
    base.searchParams.append("show_dialog", false);
    base.searchParams.append("scope", encodeURIComponent("user-read-private user-read-email"));
    console.log("URL", base.href);
    return base.href;
}

async function recentlyPlayed() {
    return fetch(`${spotifyURL}/v1/me/top/tracks`, {
        headers: {
            "Authorization": `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log("data", data);
        if (data.error) {
            getAccessToken();
        }
    })
    .catch(error => {
        console.log("error", error);
    });  
}

async function getAccessToken() {
    //fetch access token if they other call doesn't work
    return fetch(`${spotifyAccounts}/authorize?client_id=${SPOTIFY_KEY}&response_type=token&redirect_uri=${SPOTIFY_REDIRECT}&show_dialog=false`)
    .then(res => res.json())
    .then(data => {
        console.log("authorize", data);
    })
    .catch(error => {
        console.log("error", error);
    });  
}


module.exports = router;