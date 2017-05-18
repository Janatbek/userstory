const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: {type:String, required: true, index: {unique:true}},
    password: {type:String, required: true, index: {select:false}}
});

UserSchema.pre('save', function(next){
    const user = this;

    if (!user.isModified('password')) return next();

})

module.exports = mongoose.model('User', UserSchema);

