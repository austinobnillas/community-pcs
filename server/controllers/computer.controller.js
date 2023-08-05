const Computer = require("../models/computer.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

module.exports = {
    addComputer: (req, res) => {
            //adding logged in username the req.object
            username = jwt.verify(req.cookies.userToken, secret)
            const request = req.body;
            request['username'] = username.username
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
        Computer.findById({_id: req.params.id})
            .then(oneComputer => res.json(oneComputer))
            .catch(err => console.log(err));
    },
    editComputer: (req, res) => {
        //cannot access this function unless logged in and the author of the post
        username = jwt.verify(req.cookies.userToken, secret)
        if (username.username === req.body.username){
            Computer.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
            .then(updatedComputer => res.json(updatedComputer))
            .catch(err => res.status(400).json(err));
        } else {
            res.status(400).json({msg: "Only the author of the post can edit this."})
        }
        
    },
    deleteComputer: async (req, res) => {
        //cannot access this function unless logged in and the author of the post
        username = jwt.verify(req.cookies.userToken, secret)
        const createdBy = await Computer.findById({_id: req.params.id})

        if (username.username === createdBy.username){
            Computer.findByIdAndDelete({_id: req.params.id})
            .then(updatedComputer => res.json(updatedComputer))
            .catch(err => console.log(err));
        } else {
            res.status(400).json({msg: "Only the author of the post can delete this."})
        }
    }
}