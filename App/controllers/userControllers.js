const User = require('../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const userControllers = {}

//register
userControllers.create = (req,res) =>{
    const data = req.body
    const user = new User(data)
    bcrypt.genSalt()
    .then((salt) =>{
        bcrypt.hash(data.password,salt)
        .then((encrypt) =>{
            user.password = encrypt
            user.save()
            .then((user) =>{
                res.json(user)
            })
            .catch((err) =>{
                res.json(err)
            })
        })
        .catch((err) =>{
            res.json(err)
        })
    })
    .catch((err) =>{
        res.json(err)
    })
}

//login
userControllers.login = (req,res) =>{
    const {email,password} = req.body
    User.findOne({ email : email})
    .then((user) =>{
        if(!user){
            res.json({err : 'user not found'})
        }
        bcrypt.compare(password,user.password)
        .then((verifyed) =>{
           const tokenData = {
                id : user._id,
                name : user.name,
                createdAt : user.createdAt
            }
            const token = jwt.sign(tokenData,'User@123',{ expiresIn : '2d'})
            res.json({
                token : `Bearer ${token}`
            })
          
        })
        .catch((err) =>{
            res.json(err)
        })
    })
}

//show
userControllers.show = (req,res) =>{
    const id = req.user.id
    User.findById(id)
    .then((user) =>{
        res.json(user)
    })
    .catch((err) =>{
        res.json(err)
    })
}
//delete
userControllers.delete = (req,res) =>{
    const id = req.user.id
    User.findByIdAndDelete(id)
    .then((user) =>{
        res.json(user)
    })
    .catch((err) =>{
        res.json(err)
    })
}
//update
userControllers.update = (req,res) =>{
    const id = req.user.id
    const data = req.body
    User.findByIdAndUpdate(id,data,{new: true, runValidators: true})
    .then((user) =>{
        res.json(user)
    })
    .catch((err) =>{
        res.json(err)
    })
}
module.exports = userControllers