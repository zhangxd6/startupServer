var express = require('express');
var app = express();
var debug = require('debug');


var dummyVender = {
    name:' Booth Bonanaz',
    email:'booth.bonanaz@awsome.com',
    bio:'blablabla',
    phone:'2515555555',
    logo:'',
    count:0
};


app.use(express.static('public'));


app.get('/',function(req,res){
    res.redirect('/index.html');

});

app.post('/vendo/:id',function(req,res){
    dummyVender.count++;

});

app.get('/vendor/:id',function(req,res){

    debug(req.params);
    res.send(JSON.stringify(dummyVender));
});


app.listen(3000,function(){
debug('I am listening on port 3000');
});