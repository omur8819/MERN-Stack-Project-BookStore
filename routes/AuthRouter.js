const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const AuthController = require("../controllers/AuthController");

// routes /api/auth

/**
* @route  POST /api/auth/register
* @desc Register endpoint
* @access Public
*/ 
router.post(
    "/register",
    [
        check("password", "Please enter a password with 6 or more chars").isLength(
            {
                min: 6,
            }
        ),
        check("email", "Please enter a valid email!").isEmail(),
    ],
    AuthController.authRegister
);

/**
 * @route  Post /api/auth/login
 * @desc   Login endpoint
 * @access Private
 */
router.post("/login", AuthController.authLogin)

module.exports = router;