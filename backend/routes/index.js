const express = require("express");
const router = express.Router();
const music = require("./MusicRoutes");
const photos = require("./PhotoRoutes");
const projects = require("./ProjectRoutes");
const email = require("./EmailRoutes");

router.use("/music", music);
router.use("/photos", photos);
router.use("/projects", projects);
router.use("/email", email);

module.exports = router;