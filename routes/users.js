var express = require('express');
var router = express.Router();
const profileController = require('../controllers/profileController');
const adminController = require('../controllers/adminController');
const careerController = require('../controllers/careerController');

/* GET users listing. */
router.post('/profile', profileController.updateprofile);
router.get('/profile/:id', profileController.getprofile);
router.post('/admin', adminController.career);
router.post('/searchcareer', careerController.searchCareer);
router.get('/allcareer', careerController.allCareer);
router.post('/goalscareer', careerController.goalBasedCareer);

module.exports = router;
