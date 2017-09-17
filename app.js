let express = require('express')
    mongoose = require('mongoose'),
    config = require('./config');

let dbSetupController = require('./controllers/dbSetupController');

let app = express();

let PORT = 3000;

app.use('/assets', express.static(__dirname + '/public'));

mongoose.connect(config.getDbConnectionString(), { useMongoClient: true });

dbSetupController(app);

app.listen(PORT);