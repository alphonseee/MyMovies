const db = require('../database')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const pool = require("../database");
const bcrypt = require("bcrypt");
const saltRounds = 10;

app.use(cors({
    origin: "http://localhost:8080",
}))

exports.login = function (req, res) {
    const mail = req.body.mail
    const password = req.body.password
    const users = {users: mail}
    const accessToken = jwt.sign(users, process.env.ACCESS_SECRET_TOKEN)

    db.query(`SELECT password FROM users WHERE mail= ?`, [mail],
        function (err, results) {
            dbpw = results[0]
            bcrypt.compare(password, dbpw.password, (err, result) => {
                if (err)
                    throw (err)
                if (password.length == 0)
                    res.status(401).send({Error: "Password must don't be empty"})
                if (result == false)
                    return res.status(403).send({Error: "Password invalid"})
                else
                    res.status(200).send({Result: "Your token is: " + accessToken})
            })

            //
        }
    )

}