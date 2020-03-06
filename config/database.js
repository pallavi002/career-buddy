const mongoose = require('mongoose');

const initDatabase = function () {
  dbUri = process.env.DB_URI;
  mongoose.connect(dbUri);

  let connection = mongoose.connection;

  connection.on('connected', function () {
    console.log('Trying to connect: ' + dbUri);
    console.log('Database Connection Status: Successful');
    console.log('Database Connnection Established: ' + dbUri);

    // Ending Database Connections
    console.log('Finished Database Connectivity');
  });

  // For handling and reporting error
  connection.on('error', function (err) {
    console.log('Trying to connect: ' + dbUri);
    console.log('Database Connection Status: Unsuccessful');
    console.log('Database Connection Error: ' + err);

    // Ending Database Connections
    console.log('Finished Database Connectivity');
  });

  // For handling and reporting disconnection
  connection.on('disconnected', function () {
    console.log('Trying to connect: ' + dbUri);
    console.log('Database Connection Status: Unsuccessful');
    console.log('Database Connection: Disconnected');

    // Ending Database Connections
    console.log('Finished Database Connectivity');
  });
}

module.exports = initDatabase;