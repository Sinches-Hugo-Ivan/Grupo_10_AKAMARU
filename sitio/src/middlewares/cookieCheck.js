module.exports = (req,res,next) =>{
    if(req.cookies.akamaru){
        req.session.userLogin = req.cookies.akamaru;
    }
    next()
    
}