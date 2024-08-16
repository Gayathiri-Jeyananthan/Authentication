const router = require('express').Router();
const User = require('../models/user')


//register user
router.post('/register',async (req, res)=>{
    const {name,email,password} = req.body
    try {
    } catch (err) {
        console.log(err)
    }
})

module.exports = router