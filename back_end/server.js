const express = require('express');
const cors = require('cors');

app = express();
port = process.env.PORT || 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const route = require('./Routes/route_register');
route (app);

app.listen(port);

console.log('Listening on PORT: ' + port);





