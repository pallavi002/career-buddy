const express = require('express');
const userRoutes = require('./users');
const staticRoutes = require('./static');

const initRoutes = function(app) {
  console.log('Initializing Routes');
  
  app.use('/', staticRoutes);
} 

module.exports = initRoutes;
