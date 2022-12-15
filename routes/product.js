const express = require('express')
const Product=require('../model/products')
const mongoose= require('mongoose')

const router = express.Router() 



router.get('/',(req, res) => {
    Product.find()
     .then((response)=>{res.status(200).json({message:"get request",data:response})})
     .catch((err)=>{res.status(500).json({message:"get error",error:err})})
})

// colon sign to get something from url 
router.get('/:productId', (req, res) => {
    // check if the productId = 'special'
    // if(req.params.productId === 'special') {
    //     res.status(200).json( {message: 'You have a SPECIAL ID'} )
    // } else {
    //     res.status(200).json( {message: 'You have an ORDINARY ID'} )
    // }

    const productid=req.params.productId
    Product.findById(productid)
        .then((response) => {res.status(200).json({message:"object found",document:response})})
        .catch(err => res.status(500).json({message:"Not found",error:err}))
    })


// using body parser

// router.post('/',(req, res) => {
//     const items={
//         nameobj: req.body.name,
//         priceobj: req.body.price
//     }
//     res.status(200).json({message: 'post request', productinfo:items})
// })

// now seeing with mongodb 
router.post('/',(req, res) => {const createdProduct =new Product({
    _id:mongoose.Types.ObjectId(),
    name:req.body.name,
    price:req.body.price
})

createdProduct.save()
    .then((response) => {res.status(200).json({message:"post successfully",createdpost:response})})
    .catch((err) => {res.status(404).json({message:"error",error:err})})
   })


router.patch('/:productid',(req, res)=>{
   const productid=req.params.productid

   // patch me id update nhi hogi 
   const updatedProduct={
        _id:productid,
        name:req.body.name,
        price:req.body.price
   }

   // method to updare the producr

   Product.findByIdAndUpdate(productid,updatedProduct)
    .then(() =>{res.status(200).json({message:"patch successfully",updateobject:{id:productid,name:req.body.name,price:req.body.price}})})
    .catch((err) => {res.status(404).json({errormessage:"erro",error:err})})
})   

router.delete('/:productid',(req, res)=>{
    const productid=req.params.productid
    // delete me direct product id nhi bhenjni predicate bhejna hota hai 
    Product.remove({_id:productid})
        .then((response) => res.status(200).json({message:"deleted",deleteobj:response}))
        .catch((err) => {res.status(404).json({message:"not deleted",error:err})})
})

module.exports = router