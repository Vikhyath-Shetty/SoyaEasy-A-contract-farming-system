const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");
const createApplication = require("../controller/applicationController");

router.route("/:id").post(validateToken, createApplication);

module.exports = router;
