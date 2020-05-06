/*created via VIM*/
const express = require('express'); 
const cors = require('cors'); 
const mongoose = require('mongoose'); 
require('dotenv').config(); 
const app = express(); 
const PORT = process.env.PORT || 2708;
const uri = process.env.ATLAS_URI; 
app.use(cors()); 
app.use(express.json()); 

mongoose.connect(uri, {useCreateIndex:true, useNewUrlParser : true, useUnifiedTopology:true}); 
const connection = mongoose.connection; 
connection.once('open', ()=>{
    console.log("connected established ");
}); 

const productController = require('./controller/ProductController'); 
app.use('/product', productController); 

app.get('/', (req, res)=>{
    res.send('working !')
})

app.listen(PORT, ()=>{

}); 
