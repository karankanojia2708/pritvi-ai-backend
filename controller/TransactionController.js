const router = require('express').Router(); 
let transaction = require('../model/Transaction'); 
router.route('/').get((req, res)=>{
    transaction.find()
    .then(trans => {res.json(trans)})
    .catch(err=>res.status(400).json(err)); 
}); 

router.route('/').post((req,res)=>{
    const pid = req.body.pid; 
    const uid = req.body.uid; 
    const cid = req.body.cid; 
    const amount = req.body.amount; 

    
    const _trans = transaction({pid, uid, cid, amount}); 
    _trans.save()
    .then(()=>res.json('new transaction added successfully'))
    .catch(err=>res.status(400).json(err)); 
}); 
router.route('/:id').get((req, res)=>{
    transaction.find({'uid' : req.params.id})
    .then(prod => res.json(prod))
    .catch(err=> res.status(400).json(err)); 
});
module.exports = router; 