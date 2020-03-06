const express = require('express');
const router = express.Router();
const staticController = require('../controllers/staticController');

router.post('/login', staticController.login);