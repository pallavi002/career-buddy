const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

router.post('/profile', profileController.updateprofile);
router.get('/profile/:id', profileController.updateprofile);


module.exports = router;