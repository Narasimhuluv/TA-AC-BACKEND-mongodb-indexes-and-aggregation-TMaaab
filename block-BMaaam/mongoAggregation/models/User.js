var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    id : {type : String},
    index : Number,
    name : {type : String},
    isActive : Boolean,
    registered : {type : Date},
    age : {type : Number},
    gender : {type : String},
    eyeColor : {type : String},
    favoriteFruit : {type : String},
    company : {
        title : {type : String},
        email : {type : String},
        phone : {type : String},
        location : {
            country : {type : String},
            address : {type : String},
        },
        tags : [String]
    }
})

userSchema.index({name : 'text'})
var User = mongoose.model('User', userSchema);
module.exports = User;