const UserController = require("../controllers/user.controller");
const { authenticate } = require('../config/jwt.config');


module.exports = app => {
  app.get("/api", authenticate, UserController.index)
  //Sample Crud Routes:
  app.get("/api/users/", authenticate, UserController.findAllUsers);
  app.get("/api/users/:id", authenticate, UserController.findOneSingleUser);
  app.put("/api/users/update/:id", authenticate, UserController.updateExistingUser);
  app.post("/api/users/new", authenticate, UserController.createNewUser);
  app.delete("/api/users/delete/:id", authenticate, UserController.deleteAnExistingUser);
};