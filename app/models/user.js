const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: {type:String, required: true, index: {unique:true}},
    password: {type:String, required: true, index: {select:false}}
});

//Password hashing alghorith

UserSchema.pre('save', function(next){
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, function(err, hash){
        if (err) return next(err); //go to next matching round;
        user.password = hash;
        next();
    })

})

//End of Password hashing alghorith

module.exports = mongoose.model('User', UserSchema);

