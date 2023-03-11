const { body, validationResult } = require('express-validator');

exports.UpValidation = [
    body('email','You must enter a valid email').isEmail(),
    body('password','Your password must contain 8 char').isLength({ min: 8 })
]

exports.InValidation = [
    body('email','You must enter a valid email').isEmail()
]

exports.Validation=(req,res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}