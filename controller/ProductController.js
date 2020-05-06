const router = require('express').Router(); 
let product = require('../model/Products'); 
router.route('/').get((req, res)=>{
    product.find()
    .then(prod => {res.json(prod)})
    .catch(err=>res.status(400).json(err)); 
}); 

router.route('/').post((req,res)=>{
    const pname = req.body.pname; 
    const price = req.body.price; 
    const image = req.body.image; 
    const timestamp = req.body.timestamp; 
    const _prod = product({pname, price, image, timestamp}); 
    _prod.save()
    .then(()=>res.json('new product added successfully'))
    .catch(err=>res.status(400).json(err)); 
}); 

module.exports = router; 