const express = require("express");
const router = express.router();
const music = require("./MusicRoutes");
const photos = require("./PhotoRoutes");
const projects = require("./ProjectRoutes");

router.use("/music", music);
router.use("/photos", photos);
router.use("/projects", projects);

module.exports = router;