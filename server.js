var express = require('express'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    config = require('./config.js'),
    app = express();

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

