const HomeController = require("../controllers/home.controller");

module.exports = app => {
    app.post("/login", HomeController.login)
    app.post("/register", HomeController.register)
    app.get("/logout", HomeController.logout)
}