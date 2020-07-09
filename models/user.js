const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        min: 6,
        max: 200
    },
    password: {
        type: String,
        required: true,
        allowNull: false
    },
});

// Encrypting password
userSchema.pre('save', function(next){
    if(!this.isModified('password'))
        return next();
    bcrypt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
        this.password = passwordHash;
        next();
    });
});

userSchema.methods.comparePassword = function(password){
    return bcrypt.compare(password,this.password,(err,isMatch)=>{
        if(err)
            return (err);
        else{
            if(isMatch)
            res.redirect('/search');
        }
    });
}
const User = mongoose.model('User', userSchema);
console.log("User model.")
console.log(User)
module.exports = User;