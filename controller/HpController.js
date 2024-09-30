const con = {
    index:(req, res)=>{
        res.render('index');   
    },
    product:(req, res)=>{
        res.render('product');   
    },
};
module.exports = con;