const { check, validationResult } = require("express-validator");

exports.registerValidator = ()=>[
    check('name' , 'this field is required').notEmpty(),
    check('email', 'this field should be valid').isEmail(),
    check('email' , 'this field is required').notEmpty(),
    check('password' , 'this field should have at least 8 character').isLength({min :8}),

]
exports.validator = (req , res, next)=>{
    const errors = validationResult(req);
    errors.isEmpty() ? next() : res.status(400).send(errors.array())
}