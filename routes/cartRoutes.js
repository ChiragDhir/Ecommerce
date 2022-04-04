const express=require('express');
const router=express.Router();
const User = require('../models/user');
const Product=require('../models/product');
const {isLoggedIn}=require('../middleware');

//adding product to cart
router.post('/cart/:productId/add', isLoggedIn,async(req,res)=>{

    const {productId}=req.params;
    const product=await Product.findById(productId);


      const currentUser=req.user;
       currentUser.cart.push(product);

       await currentUser.save();

       req.flash('Success','Item added to cart Successfully!');
       res.redirect(`/products/${productId}`);
});

//display all items in cart
router.get('/user/cart/items',isLoggedIn,async(req,res)=>{


    const userId=req.user._id;
    const user=await User.findById(userId).populate('cart');
    res.render('cart/userCart',{user});

})

//deleting cart item
router.delete('/user/:id/remove',isLoggedIn,async(req,res)=>{

    const productid=req.params.id;
    const userid=req.user._id;
    await User.findByIdAndUpdate(userid,{$pull:{cart:productid}});
    res.redirect('/user/cart/items');
})

module.exports=router;