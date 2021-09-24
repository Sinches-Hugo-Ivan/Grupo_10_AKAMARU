const {body} = require('express-validator');
// const users = require('../data/users_db');
const bcrypt = require('bcryptjs');
const db = require('../database/models');

module.exports = [
  body('email')
  .custom((value,{req}) => {
    console.log(req.body)
    return db.User.findOne({
        where :{
            email : value
        }
    }).then(user => {
        if(!user || !bcrypt.compareSync(req.body.password,user.password)){
            return Promise.reject()
        }
    }).catch( () => Promise.reject('Credenciales inválidas'))
})
  // .custom((value,{req})=> {
  //   let user = users.find(user => user.email == value && bcrypt.compareSync(req.body.password,user.password));
    
  //   if(user){
  //     return true 
  //   } else{
  //     return false 
  //   }
  // }).withMessage('Credeciales inválidas')
]