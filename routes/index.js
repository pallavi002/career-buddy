const express = require('express');
const userRoutes = require('./users');

const initRoutes = function(app) {
  console.log('Initializing Routes');
  
  app.use('/', userRoutes);
  
} 

module.exports = initRoutes;
