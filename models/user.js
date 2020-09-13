var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var userSchema = mongoose.Schema({
    local: {
        username: String,
        password: String
    }
});

userSchema.methods.generateHash = function(password, next){
    bcrypt.hash(password, null, null, next);
};

userSchema.methods.validPassword = function(password, next){
    bcrypt.compare(password, this.local.password, next);
};

module.exports = mongoose.model('User', userSchema);