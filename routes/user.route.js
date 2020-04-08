const express = require("express");
const router = express.Router();

const { readController } = require("../controllers/user.controller");

router.get("/user/:id", requireSignin, readController);

module.exports = router;
