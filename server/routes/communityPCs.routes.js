const userController = require("../controllers/user.controller");
const computerController = require("../controllers/computer.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.post('/api/register', userController.register);
    app.post('/api/login', userController.login);
    app.post('/api/logout', userController.logout);
    // app.get('/api/users', authenticate,  userController.getAllUsers);
    // app.get('/api/getOne', authenticate, userController.getOneUser);
    app.get('/api/dashboard', computerController.getAllComputers);
    app.get('/api/:id', computerController.getOneComputer);
    app.post('/api/addcomputer', authenticate, computerController.addComputer);
}