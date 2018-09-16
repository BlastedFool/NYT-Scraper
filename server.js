const express = require('express'); // Server
const bodyParser = require('body-parser'); // JSON Middleware
const mongoose = require('mongoose'); // MongoDB ORM
const routes = require("./routes");
let db = require("./models"); // Require all models

let PORT = process.env.PORT || 8080;
let mongooseConnection = mongoose.connection;

let app = express();

app.use(bodyParser.urlencoded({ extended: true })); // Use body-parser for handling form submissions
app.use(bodyParser.json()); // Allows For JSON Interactions Between Client & Server
app.use(express.static("client/build")); // Serve Static / React Pages

app.use(routes);
//mongoose configs 
mongoose.Promise = global.Promise; // Set up promises with mongoose
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact",);
 mongooseConnection.on('error', console.error.bind(console, 'connection error:'));
 mongooseConnection.once('open', function() {
  console.log(`Sucessfully Connected to Mongo DB !`); // If Connection is successful, Console.log(Message)
});
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
