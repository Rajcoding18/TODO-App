const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// SIGN UP
router.post('/register', async (req, res)=>{
    try {
        const {email, username, password} = req.body;
        const hashpassword = bcrypt.hashSync(password);
        const user = User({email, username, password: hashpassword});
        await user.save().then( () => 
            res.status(200).json({message: "User registered successfully"})
        );
    } catch (error) {
        res.status(200).json({message: "User already exists"});
    }
})

// LOGIN
router.post('/signin', async (req, res)=>{
   try {

    const user = await User.findOne({email: req.body.email});
    if(!user){
        return res.status(400).json({message: "User not found"});
    }

    const isPasswordCorrect = bcrypt.compareSync(
        req.body.password, 
        user.password);
        if(!isPasswordCorrect){
            return res.status(200).json({message: "Invalid Password"}); // changed to 200
        }
        const {password, ...others} = user._doc;
        res.status(200).json({user: others});

   } catch (error) {
    res.status(200).json({message: "Something went wrong"}); // changed to 200
   }
})

module.exports = router;