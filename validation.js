const {check,validationResult}=require('express-validator');

module.exports={
myValidator:[
check('fullname')
.isLength({min:1}).withMessage('Full name is required field.')
.isAlpha().withMessage('Only letters are accepted in the name')
.trim()
.escape(),

check('email')
.isLength({min:1}).withMessage('Email is required field.')
.isEmail().withMessage('Give a valid email address')
.normalizeEmail()
],
 
 
 errorFormatter: ({location, msg, param, value, nestedErrors}) => {
            return {
                type: "Error",
                name: "Signup Failure",
                location: location,
                message: msg,
                param: param,
                value: value,
                nestedErrors: nestedErrors,
            }
    },
	
validResult:validationResult

}

