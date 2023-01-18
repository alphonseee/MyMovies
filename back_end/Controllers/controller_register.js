const db = require('../database')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const pool = require("../database");
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors({
    origin: "http://localhost:8080",
}))


exports.createuser = function (req, res) {
    const id = req.body.id;
    const mail = req.body.mail;
    if (!mail)
        return res.status(400).send({msg: "Email should not be empty"})
    const password = req.body.password;
    bcrypt.hash(password, saltRounds, function(err, hash) {
        db.query('insert into users values(?, ?, ?)', [id, mail, hash], (err, result) => {
            if (err) {
                console.log(err)
            } else {
                res.send("Account created")
            }
        })
    });
}