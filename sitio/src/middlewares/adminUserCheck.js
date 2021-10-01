module.exports = (req,res,next) => {
    console.log("---------");
    console.log(req.session.userLogin);
    if(req.session.userLogin && req.session.userLogin.rol === "admin"){
        next();
    }else{
        res.redirect("/");
    }
}