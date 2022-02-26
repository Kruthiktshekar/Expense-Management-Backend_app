const jwt = require('jsonwebtoken')
const authMiddleware = (req,res,next) =>{
    const token = req.header('Authorization').split(' ')[1]
    let result
    try {
        result = jwt.verify(token,'User@123')
        req.user = result
        next()
    } catch (err) {
        res.json(err)
    }
}

module.exports = authMiddleware