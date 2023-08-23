var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');
const db= require('./models');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//set jwt secret
app.set('secretKey', 'xxCursodeReactxx');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//handle errors
app.use(function(err, req, res, next){
    console.log(err);
    if(err.status == 404){
        res.status(404).json({message: 'Not found'});
    }else{
        res.status(500).json({message: "Something looks wrong :(", error: err})
    }
})

//middlewares
function validateUser(req, res, next){
    jwt.verify(req.headers('x-access-token'), req.app.get('secretKey'), function(err, decoded){
        if(err){
            req.body.error = err.message;
            res.status(401).json({status:"error", message: err.message, data:null})
        }else{
            req.body.userId = decoded.id;
            next();

        }
    })
}

module.exports = app;
