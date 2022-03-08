const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const db = "mongodb+srv://0Ei67ymTH64ab7D5:0Ei67ymTH64ab7D5@cgcluster.rholy.mongodb.net/eventsdb?retryWrites=true&w=majority";
const User = require('../models/user');
mongoose.connect(db,err=>{
    if(err){
        console.log(err);
    }else{
        console.log("connected to eventsdb");
    }
});

function verifyToken(req, res, next) {
    if(!req.headers.authorization) {
      return res.status(401).send('Unauthorized request')
    }
    let token = req.headers.authorization.split(' ')[1]
    if(token === 'null') {
      return res.status(401).send('Unauthorized request')    
    }
    let payload = jwt.verify(token, 'secretKey')
    if(!payload) {
      return res.status(401).send('Unauthorized request')    
    }
    req.userId = payload.subject
    next()
  }

router.get('/', (req,res)=>{
    res.send('send from api');
    console.log("get request from outside");
});

router.post('/register',(req,res)=>{
    let userData = req.body;
    let user = new User(userData);
    user.save((error,registerredUser)=>{
        if(error){
            console.log(error)
        }else{
            let payLoad = {subject: registerredUser._id};
            let token  = jwt.sign(payLoad,'secretKey');

            res.status(200).send({token});
        }
    })
});

router.post('/login',(req,res)=>{
    let userData = req.body;
    User.find({email:userData.email},(error,user)=>{
        if(error){
            console.log(error);
        }else{
            if(user){
                const _user =  user[0]?.toObject();

                if(_user?.length==0){
    
                    res.status(401).send('Invalid Email');
                }
                else{
    
                    if (_user?.password !== userData.password){
                        res.status(401).send('Invalid Password');
                    }else{
                        let payLoad = {subject: _user._id};
                        let token  = jwt.sign(payLoad,'secretKey');
                        res.status(200).send({token});
                    }
                }      
            }else{
                res.status(401).send('Invalid Email');
            }
         
       
        }
    })
});

router.get ('/events',(req,res)=>{
    let _events = [
        {
            "_id" : "1",
            "name" :"event name 1",
            "description" :"lorem ipsum",
            "date": "2022-03-01"
        },
        {
            "_id" : "2",
            "name" :"event name 2",
            "description" :"lorem ipsum",
            "date": "2022-03-01"
        },
        {
            "_id" : "3",
            "name" :"event name 3",
            "description" :"lorem ipsum",
            "date": "2022-03-01"
        },
        {
            "_id" : "4",
            "name" :"event name 4",
            "description" :"lorem ipsum",
            "date": "2022-03-01"
        }

    ] ;
    res.json(_events);
});

router.get ('/special',verifyToken,(req,res)=>{
    let _events = [
        {
            "_id" : "1",
            "name" :"event name 1",
            "description" :"lorem ipsum",
            "date": "2022-03-01"
        },
        {
            "_id" : "2",
            "name" :"event name 2",
            "description" :"lorem ipsum",
            "date": "2022-03-01"
        },
        {
            "_id" : "3",
            "name" :"event name 3",
            "description" :"lorem ipsum",
            "date": "2022-03-01"
        },
        {
            "_id" : "4",
            "name" :"event name 4",
            "description" :"lorem ipsum",
            "date": "2022-03-01"
        }

    ] ;
    res.json(_events);
});


module.exports=router;