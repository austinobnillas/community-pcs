const Computer = require("../models/computer.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = {
    addComputer: (req, res) => {
            //adding logged in username the req.object
            username = jwt.verify(req.cookies.userToken, secret)
            // console.log(req.body, username.username);
            const request = req.body;
            request['username'] = username.username
            // console.log(username)

        Computer.create(request)
            .then(newComputer => res.json(newComputer))
            .catch(err => res.status(400).json(err));
    },
    getAllComputers: (req, res) => {
        Computer.find()
            .then(computers => res.json(computers))
            .catch(err => console.log(err));
    },
    getOneComputer: (req, res) => {
        Computer.findById({_id: req.params._id})
            .then(oneComputer => res.json(oneComputer))
            .catch(err => console.log(err));
    },
    editComputer: (req, res) => {
        Computer.findByIdAndDelete({_id: req.params.id}, req.body)
            .then(updatedComputer => res.json(updatedComputer))
            .catch(err => console.log(err));
    },
    deleteComputer: (req, res) => {
        Computer.findByIdAndDelete({_id: req.params.id})
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => console.log(err));
    }
}