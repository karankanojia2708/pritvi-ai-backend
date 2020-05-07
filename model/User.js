const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const struct_user = new Schema({
    email : {
        type : String, require : true, trim : true, minlength : 3, unique : true
    }, 
    password : {
        type : String, required : true, trim : true, minlength : 3
    }, 
    name : {
        type : String, required : true, trim : true, minlength : 3
    },
    wallet: {
        type : Number, require : true, trim : true, min : 0
    }
});

const user = mongoose.model('user', struct_user); 
module.exports = user; 