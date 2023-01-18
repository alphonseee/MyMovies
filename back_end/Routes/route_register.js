const controller = require("../Controllers/controller_register");


module.exports = function (app) {

    app.route('/register')
        .post(controller.createuser)
}