const express = require('express');
const cors = require('cors');

app = express();
port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const register = require('./Routes/route_register');
const login = require('./Routes/route_login');
const home = require('./Routes/route_home');


register (app);
login (app);
home (app);

app.listen(port);

console.log('Listening on PORT: ' + port);





