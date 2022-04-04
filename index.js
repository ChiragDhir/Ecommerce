if(process.env.NODE_ENV !=='production'){
    require('dotenv').config();
}

const express=require('express');
const app=express();
const mongoose=require('mongoose');
const path=require('path');
const seedDB=require('./seed');
const methodOverride=require('method-override');
const sessions=require('express-session');
const flash=require('connect-flash');
const productRoutes=require('./routes/productRoutes');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const User=require('./models/user');
const authRoutes=require('./routes/authRoutes');
const cartRoutes=require('./routes/cartRoutes');

// mongoose.connect('mongodb://localhost:27017/newDB')
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log(err); 
});
// seedDB();


app.use(flash());
app.use(sessions({
    secret:'weneedgoodsecret',
    resave: false,
    saveUninitialized: true,
}));
app.use(methodOverride('_method'));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true}));




app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success = req.flash('Success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

app.get('/',(req,res)=>{
    res.render('products/home');
})
app.use(productRoutes);
app.use(authRoutes);
app.use(cartRoutes);

app.listen(process.env.PORT || 2323,()=>{
    console.log('Server connected at port 2323');
})