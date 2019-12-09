var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new Schema({ 
    question: {
        type: String,
        required: true,
    },
    audio: {
        type: String,
    },
    image: {
        type: String,
    },
    answer_a: {
        type: String,
        required: true,
    },
    answer_b: {
        type: String,
        required: true,
    },
    answer_c: {
        type: String,
        required: true,
    },
    answer_d: {
        type: String,
        required: true,
    },
    answer_correct: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        default: '[TEST]'
    },
    part: {
        type: String,
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
},{
         versionKey: false,
         timestamps: true
     });

module.exports = mongoose.model('Question',QuestionSchema);