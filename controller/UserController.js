const router = require('express').Router(); 
let user = require('../model/User'); 
router.route('/').get((req, res)=>{
    user.find()
    .then(users => {res.json(users)})
    .catch(err=>res.status(400).json(err)); 
}); 

router.route('/').post((req, res)=>{
    const email = req.body.email;
    const password = req.body.password; 
    const name = req.body.name; 
    const wallet = req.body.wallet;  
   
    const _user = user({email, password, name, wallet}); 
    _user.save()
    .then(()=>res.json('new user added successfully'))
    .catch(err=>res.status(400).json(err)); 
});

router.route('/:id').get((req,res)=>{
    user.findById(req.params.id)
    .then(_user=>res.json(_user))
    .catch(err=>res.status(400).json(err)); 
});


module.exports = router; 