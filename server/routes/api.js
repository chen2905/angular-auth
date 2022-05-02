const express = require("express");
const router = express.Router();
const User = require("../models/user");

const mongoose = require("mongoose");

const db =
  "mongodb+srv://0Ei67ymTH64ab7D5:0Ei67ymTH64ab7D5@cgcluster.rholy.mongodb.net/eventsdb?retryWrites=true&w=majority";

mongoose.connect(db, (err) => {
  if (err) {
    console.error("Error! :" + err);
  } else {
    console.log("Connect to mongodb");
  }
});
router.get("/", (req, res) => {
  res.send("From API route");
});

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData);
  user.save((error, registeredUser) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).send(registeredUser);
    }
  });
});

router.post("/login", (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log(error);
    } else {
      if (!user) {
        res.status(401).send("Invalid email");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("Invalid password");
        } else {
          res.status(200).send(user);
        }
      }
    }
  });
});

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Auto Expo 1",
      description: "lorem ipsum",
      date: "2022-05-01",
    },
    {
      _id: "2",
      name: "Auto Expo 2",
      description: "lorem ipsum",
      date: "2022-05-02",
    },
    {
      _id: "3",
      name: "Auto Expo 3",
      description: "lorem ipsum",
      date: "2022-05-03",
    },
  ];
  //res.send(events);
  res.json(events);
});


router.get("/special", (req, res) => {
    let events = [
      {
        _id: "1",
        name: "Special Auto Expo 1",
        description: "lorem ipsum",
        date: "2022-05-01",
      },
      {
        _id: "2",
        name: "Special Auto Expo 2",
        description: "lorem ipsum",
        date: "2022-05-02",
      },
      {
        _id: "3",
        name: "Special Auto Expo 3",
        description: "lorem ipsum",
        date: "2022-05-03",
      },
    ];
    //res.send(events);
    res.json(events);
  });

module.exports = router;
