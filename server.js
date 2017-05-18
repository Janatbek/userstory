var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    config = require('./config.js'),
    mongoose = require('mongoose'),
    app = express();

// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect(config.database, function(err){
    if(err){
        console.log(err);
    }else{
        console.log('Connected to the database');
    }
});

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Serve the file
app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/views/index.html')
})


//Run the server
app.listen(config.port, function(err){
    if(err){
        console.log(err);
    }
    else{
        console.info('listening on port ' + config.port)
    }
})

