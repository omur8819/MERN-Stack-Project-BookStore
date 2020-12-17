const express = require("express");
const router = express.Router();
const AuthRouter = require("./AuthRouter");

// only api endpoint

/*
@route /api/auth
@desc Route for auth
*/

router.use("/auth", AuthRouter);


module.exports = router;