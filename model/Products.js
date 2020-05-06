const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const struct_product = new Schema({
    pname : {
        type : String, require : true, trim : true, minlength : 3 
    }, 
    price : {
        type : Number, required : true, trim : true, min : 0 
    }, 
    image : {
        type : String, required : true, trim : true, minlength : 3
    },
    timestamp: {
        type : Number, require : true, trim : true, min : 0
    }
});

const product = mongoose.model('product', struct_product); 
module.exports = product; 