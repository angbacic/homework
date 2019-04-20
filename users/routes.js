const { Router } = require('express')
const User = require('./model')
const bcrypt = require('bcrypt')

const router = new Router()


router.post('/users', (req,res,next)=>{
    User
        .create({email: req.body.email,
                password:bcrypt.hashSync(req.body.password, 10),
                password_confirmation:bcrypt.hashSync(req.body.password, 10)})
        .then(user =>{
            if (!user ){
                return res.status(404).send({
                    message: `User does not exist`
            })
        } 
        // if (password === confirmation_password) 
        return res.status(201).send(user)
})
        .catch(error => next(error))
})


  module.exports = router