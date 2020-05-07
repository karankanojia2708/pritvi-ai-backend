const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const struct_transaction = new Schema({
    pid : {
        type : String, require : true, trim : true, minlength : 3
    }, 
    uid : {
        type : String, required : true, trim : true, minlength : 3
    }, 
    cid : {
        type : String, required : true, trim : true, minlength : 3
    },
    amount: {
        type : Number, require : true, trim : true
    }
},{
    timestamps : true
});

const transaction = mongoose.model('transaction', struct_transaction); 
module.exports = transaction; 