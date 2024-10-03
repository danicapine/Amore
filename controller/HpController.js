const con = {
    index:(req, res)=>{
        res.render('index');   
    },
    product:(req, res)=>{
        res.render('product');   
    },
    cart:(req, res)=>{
        res.render('cart');   
    },
    blog:(req, res)=>{
        res.render('blog');   
    },
    about:(req, res)=>{
        res.render('about');   
    },
    contact:(req, res)=>{
        res.render('contact');   
    },
    features:(req, res)=>{
        res.render('features');   
    },
    roseblog:(req, res)=>{
        res.render('roseblog');   
    },
    tulipblog:(req, res)=>{
        res.render('tulipblog');   
    },
    carblog:(req, res)=>{
        res.render('carblog');   
    },
};
module.exports = con;