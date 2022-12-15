const express = require('express')
const mongoose = require('mongoose')
const router = express.Router()

const User= require('../model/signin')


router.get('/', (req, res)=>{
    res.status(200).render('test')
})

router.post('/', (req, res)=>{

    const useremail=req.body.usermail
    User.findOne({email: useremail})
        .then((user)=>{
            if(user===null){
                const usr=new User 
                ({
                     _id:mongoose.Types.ObjectId(),
                     fullname:req.body.fullname,
                     email:req.body.usermail,
                     password:req.body.userpswd
                 }) 
         
                 usr.save()
                     .then(res.status(200).send({message: 'ok created'}))
                     
                     .catch((err)=>{res.status(404).json({message: "db-error",error:err})})
            }
            else{
                res.status(404).send({message:'this email already exists'})
            }
        })
        .catch((err)=>{res.status(404).send({message:'this is error in signup form',error:err})})
    

})
module.exports = router

