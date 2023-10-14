const express = require('express')
const app = express();
const port = 4000
const path = require('path');
//importing application routes
var irouter = require('./routes/index');
// Configure the 'view' directory for rendering HTML templates using hbs
app.set('views',path.join(__dirname, 'view'));
app.set('view engine', 'hbs');

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static('public'));
app.use('/', irouter);


// Start the Express server
app.listen(port, () => {
  console.log(`Server running on port 4000`)
});
module.exports = app;