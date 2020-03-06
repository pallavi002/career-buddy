var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');

/* GET users listing. */
router.post('/profile', profileController.updateprofile);
router.get('/profile/:id', profileController.getprofile);


module.exports = router;
