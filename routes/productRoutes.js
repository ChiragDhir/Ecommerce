const express=require('express');
const router=express.Router();
const Product=require('../models/product');
const Review=require('../models/review');
const {isLoggedIn}=require('../middleware');

router.get('/products',async(req,res)=>{
    const products= await Product.find({});
 res.render('products/index',{products});
})

router.get('/products/new',isLoggedIn,(req,res)=>{
    res.render('products/new');
})

router.post('/products', isLoggedIn,async (req,res)=>{
    const newProduct={
        ...req.body
    }
await Product.create(newProduct);
req.flash('Success','Product created Successfully!');
res.redirect('/products');
})

router.get('/products/:id',async (req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id).populate('reviews');
    res.render('products/show',{product});
})

router.get('/products/:id/edit',isLoggedIn,async (req,res)=>{
    const {id}=req.params;
    const product=await Product.findById(id);
    res.render('products/edit',{product});
})

router.patch('/products/:id',isLoggedIn,async (req,res)=>{
    const updatedProduct=req.body;
    const {id}=req.params;
    await Product.findByIdAndUpdate(id,updatedProduct);
    res.redirect(`/products/${id}`);
})

router.delete('/products/:id',isLoggedIn,async (req,res)=>{
    const {id}=req.params;
    await Product.findByIdAndDelete(id);
    res.redirect('/products');
})

//api's for reviews
router.post('/products/:id/review',isLoggedIn,async(req,res)=>{
 
     const{id}=req.params;
     const product=await Product.findById(id);

     const{rating,comment}=req.body;
     const review=new Review({rating,comment,user:req.user.username});
     product.reviews.push(review);
     await product.save();
     await review.save();

     req.flash('Success','Thanks for your review!');

     res.redirect(`/products/${id}`);
});

module.exports=router;