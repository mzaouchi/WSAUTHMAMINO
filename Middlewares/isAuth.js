var jwt = require('jsonwebtoken')
const User = require('../Models/User')

const isAuth=async(req,res,next)=>{
    try {
        const token = req.header('Authorized')

        var decoded = jwt.verify(token, process.env.privateKey)

        if(!decoded){
            res.status(400).send('Not a valid token')
        }

        const found = await User.findById(decoded.id)
        
        req.user = found
        next()
    } catch (error) {
        res.status(500).send({errors:[{msg : 'Not auto'}]})
    }

   
}

module.exports = isAuth