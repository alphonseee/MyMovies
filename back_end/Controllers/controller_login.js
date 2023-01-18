const db = require('../database')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const pool = require("../database");
const {checkToken} = require("./auth/token_validation");

app.use(cors({
    origin: "http://localhost:8080",
}))

exports.login = function (req, res) {
    const username = req.body.username
    const password = req.body.password


    const user = {user: username}


    const accesToken = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN)

    db.query(
        `SELECT password FROM User WHERE username= ?`, [username],


        function (err, results) {
            dbpw = results[0].password
            if (dbpw == password) {
                res.json({token: accesToken})
            } else {
                res.send('password incorrect / username doen\'n exist')
            }
        }
    )
}