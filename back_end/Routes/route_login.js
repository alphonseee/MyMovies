const controller = require("../Controllers/controller_login");


module.exports = function (app) {

    app.route('/login')
        .post(controller.login)

}