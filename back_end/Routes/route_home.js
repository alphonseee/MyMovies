const controller = require("../Controllers/controller_home");


module.exports = function (app) {

    app.route('/home')
        .get(controller.home)

}