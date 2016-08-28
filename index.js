var express = require('express');
var app = express();
var debug = require('debug');


var dummyVender = {
    name:' Booth Bonanaz',
    email:'booth.bonanaz@awsome.com',
    bio:'blablabla',
    phone:'2515555555',
    logo:'',
    count:0,
    vistors:[
        {
            name:'Georage Washington',
            company:'The US LLC',
            phone:2511001000,
            email:'washing@us.llc',
            timeOfVisit:'08/28/2016 12:00AM'
        }
    ]

};


app.use(express.static('public'));


app.get('/',function(req,res){
    res.redirect('/index.html');

});

app.post('/vendor/:id',function(req,res){
// Domain you wish to allow
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    dummyVender.count++;
    dummyVender.vistors.push( {
            name:'Random vistors'+ dummyVender.count,
            company:'The US LLC',
            phone:2511001000,
            email:'washing@us.llc',
            timeOfVisit:new Date()
        });
    res.sendStatus(200);
});

app.get('/vendor/:id',function(req,res){
// Domain you wish to allow
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

// Request methods you wish to allow
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    debug(req.params);
    res.send(JSON.stringify(dummyVender));
});




app.listen(process.env.PORT||3000,function(){
debug('I am listening on port 3000');
});