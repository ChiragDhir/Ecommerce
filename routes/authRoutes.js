const express=require('express');
const router=express.Router();
const User = require('../models/user');
const passport=require('passport');

//get the signup page
router.get('/register',(req,res)=>{
    res.render('auth/signup');
})

//register the account into db
router.post('/register',async(req,res)=>{

    const {username,email,password}=req.body;
    const user={
        username:username,
        email:email,
    }
    await User.register(user,password);
    req.flash('Success',`Welcome ${username},Please login to continue!`);
   res.redirect('/products');
});

//get the login page
router.get('/login',(req,res)=>{
    res.render('auth/login');
});

//authenticating our login id
router.post('/login', passport.authenticate('local', 

{ failureRedirect: '/login' }),
  function(req, res) {
      const {username}=req.user;
      req.flash('Success',`Hey ${username},we have something new for you!`);
    res.redirect('/products');
  });

//logging out
router.get('/logout',(req,res)=>{
    req.logout();
    req.flash('Success','Logged out Successfully!');
    res.redirect('/login');
})



// router.get('/fakeuser',async(req,res)=>{
//     const user=new User({
//         username:'Chirag',
//         email:'chirag@gmail.com'
//     });
//     const newUser=await User.register(user,'chirag123');
//     res.send(newUser);
// });

module.exports=router;
