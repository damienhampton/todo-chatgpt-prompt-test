const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/me', auth, getUser);

module.exports = router;