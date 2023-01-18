const db = require('../database')
const cors = require("cors");

app.use(cors({
    origin: "http://localhost:8080",
}))

exports.home = function (req, res) {
    {
        db.query('SELECT * FROM mymovies.movies',
            function (err, results) {
                res.json(results)
            })
    }
};
