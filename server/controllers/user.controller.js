const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;


module.exports = {
    register: async (req, res) => {
        try{
            const user = await User.findOne({username: req.body.username});
            if (user) {
                return res.status(400).json({msg: "Username already in use!"})
            } else {
                const newUser = await User.create(req.body);

                const userToken = jwt.sign({
                    _id: newUser._id,
                    username: newUser.username,
                }, secret, {expiresIn: '2h'});

                res.status(201).cookie('userToken', userToken, {httpOnly: true, maxAge: 7200000}).json(newUser);
            }
        }
        catch(err){
            res.status(400).json(err)
        }
    },

    login: async (req, res) => {
        try{
            const user = await User.findOne({username: req.body.username});
            if (user === null) {
                return res.status(400).json({msg: "Invalid login attempt 1"})
            }
            const correctPassword = await bcrypt.compare(req.body.password, user.password);
            if (!correctPassword) {
                return res.status(400).json({msg: "Invalid Login attemp 2"});
            }
            else {
                const userToken = jwt.sign({
                    _id: user._id,
                    username: user.username
                }, secret, {expiresIn: "2h"});
                res.status(200).cookie('userToken', userToken, {httpOnly: true, maxAge: 7200000}).json({msg: "Successful login!", user: user})
            }
        }
        catch(err){
            res.status(400).json(err);
        }
    },
    logout: (req, res) => {
        res.clearCookie('userToken');
        res.sendStatus(200);
    },
    getAllUsers: (req, res) => {
        User.find()
            .then(allUsers => res.json({users: allUsers}))
            .catch(err => res.json({msg: "Something went Wrong", error: err}))
    },
    getOneUser: (req, res) => {

        username = jwt.verify(req.cookies.userToken, secret)
        console.log(username.username);

        User.findOne({userName: userName.userName})
            .then(user => res.json(user))
    }
}