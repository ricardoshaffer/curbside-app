const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../../config/passport');
const JWT = require('jsonwebtoken');
const User = require('../../models/user')
const Listing = require('../../models/listing');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');


const signToken = userID => {
    return JWT.sign({
        iss: "Curbside",
        sub: userID
    }, "Curbside", { expiresIn: "12h" });
}

// =====================================================


// Express.Router sends a get request to '/authenticated' path if the user authentication is true
userRouter.get('/authenticated', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, email, role } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { email, role } });
    }
});

// Express.Router sends a post response from server to client-side
userRouter.post('/signup', (req, res) => {
    const { email, password, role } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occurred.", msgError: true } });
        if (user)
            res.status(400).json({ message: { msgBody: "Username is already taken.", msgError: true } });
        // Confirming a new user has been created
        else{
            const newUser = new User({email,password,role});
            newUser.save(err=>{
                if(err)
                    res.status(500).json({message: {msgBody: "Error has occurred.", msgError: true} });
                else
                    res.status(201).json({message : {msgBody: "Account successfully created!!", msgError: false} });
            });
        }
    })
    // Test - Pulls out data from User inputs
    User.create(req.body)
    .then(user => {
        console.log("SIGNUP RAN SUCCESSFULLY!")
        console.log(user);
        console.log(req.body)
    });
});

userRouter.get('/signin', (req, res) => {
    const { email, password, role } = req.body;
    User.findOne({ email }, (err, user) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occurred.", msgError: true } });
        if (user)
            res.status(200).json({ message: { msgBody: "You have successfully logged in!!", msgError: false } });
        // Confirming a new user has been created
    });
});


userRouter.get('/signout', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { email: "", role: "" }, success: true });
});

userRouter.get('/authenticated', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { email, role } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { email, role } });
});

module.exports = userRouter;