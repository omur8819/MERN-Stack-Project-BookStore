const router = express.Router();

const AuthController = require("../controllers/AuthController");

// routes /api/auth

/**
* @route  POST /api/auth/register
* @desc Register endpoint
* @access Public
*/ 
router.post("/register", AuthController.authRegister)

/**
 * @route  Post /api/auth/login
 * @desc   Login endpoint
 * @access Private
 */
router.post("/login", AuthController.authLogin)

module.exports = router;