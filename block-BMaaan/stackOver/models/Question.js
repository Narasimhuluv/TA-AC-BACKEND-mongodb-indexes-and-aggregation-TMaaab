var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var questionSchema = new Schema({
    title : {type : String, required : {true}},
    tags : [{type : String}],
    answers : [{type : Schema.Types.ObjectId, ref : 'Answer'}],
    createdBy : {type : Schema.Types.ObjectId, ref : 'User'}
})
questionSchema.index({tags : 1})
var Question = mongoose.model('Question', questionSchema)
module.exports = Question;