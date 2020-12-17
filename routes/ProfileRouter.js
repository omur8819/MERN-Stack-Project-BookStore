const express = require("express");
const auth = require("../middleware/authMiddleware");
const router = express.Router();

//base url: /api/profile

/**
* @route  POST /api/profile
* @desc Profile endpoint
* @access Private
*/ 
router.get("/", auth, (req, res) => {
    res.send(req.decodedUser);
});

module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyRGF0YSI6eyJfaWQiOiI1ZmRiYjExYTcwMjVmYTFhZjgxMGRlNWYiLCJmaXJzdE5hbWUiOiJidXNyYSIsImxhc3ROYW1lIjoiYm96ZGFnIiwiZW1haWwiOiJidXNyYUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCR2ZlNKLlpiSEV4VU54eHd5b2tMRjEuZFZUeGJDTVdZa0xpL2t0b1VmNlNDV3IuYUhhZ256TyIsInJlZ2lzdGVyRGF0ZSI6IjIwMjAtMTItMTdUMTk6Mjc6MjIuMjcyWiIsIl9fdiI6MH0sImlhdCI6MTYwODIzNTAyNywiZXhwIjoxNjA4MjM4NjI3fQ.AN-irKNxMWzaQ1zT_h4UXxU00F2whlQQZtC3ioYBE74