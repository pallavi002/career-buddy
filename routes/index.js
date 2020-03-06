const express = require('express');
const userRoutes = require('./users');
const staticRoutes = require('./static');

const initRoutes = function(app) {
  console.log('Initializing Routes');
  
  app.use('/', staticRoutes);
  app.use('/user', userRoutes);
} 

module.exports = initRoutes;
