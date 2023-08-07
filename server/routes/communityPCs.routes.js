const userController = require("../controllers/user.controller");
const computerController = require("../controllers/computer.controller");
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    app.post('/api/register', userController.register);
    app.post('/api/login', userController.login);
    app.post('/api/logout', userController.logout);
    // app.get('/api/users', userController.getAllUsers);
    // app.get('/api/getOne', authenticate, userController.getOneUser);
    app.get('/api/dashboard', computerController.getAllComputers);
    app.get('/api/computers/:id', computerController.getOneComputer);
    // edit a computer
    app.patch('/api/computers/edit/:id', authenticate, computerController.editComputer);
    app.post('/api/addcomputer', authenticate, computerController.addComputer);
    //delete
    app.delete('/api/computers/delete/:id', authenticate, computerController.deleteComputer);

}