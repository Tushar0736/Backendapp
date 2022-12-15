const express = require('express');

const router=express.Router()

/// iske ander ham changes krte rhenege
let user={};

router.get('/',(req, res) => {
    res.status(200).json({
        message: 'get request successful',
        users: user
    })
})

// jo user se data aaya request se ham usse user me daal denge
router.post('/',(req, res) => {
    user=req.body
    res.status(200).json({
        message:'post request successful',
        users: user
    })
})

// edhr ham update krte rhenege jo user se data aaiaga req ke through
router.patch('/',(req, res) => {
    const dataobj = req.body

    for(key in dataobj) {
        user[key] = dataobj[key]
    }

    res.status(200).json({message:'patch request successful', users: user})
})

// simple delete
router.delete('/',(req, res) => {
    user={};
    res.status(200).json({message:'delete request successful', users: user})
})

// parameters

router.post('/:name/:age',(req, res) => {
    user={
        name:req.params.name, 
        age:req.params.age
    }
    res.status(200).json({message:"post successfully",users: user})
})

// queries 

router.get('/user',(req, res)=>{
    user=req.query
    res.status(200).json({message:"fetched",users:user})
})
module.exports =router