const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User=require('../model/signin')

router.get('/',(req, res) => {
    res.render('login')
})

router.post('/',(req, res) => {
        const objemail=req.body.useremail
        const objpassword = req.body.userpassword

        User.findOne({email: objemail})
            .then((user) => {
                if(user.password==objpassword){
                    res.status(200).json({message:"welcome to our site"})
                }
                else{
                    res.status(404).json({message:"password is wrong"})
                }
            })  
            .catch((err) => {
                res.status(404).json({message: "there is no such email",error:err})
            })
})

module.exports = router