const {check,validationResult}=require('express-validator');

module.exports={
myValidator:[
check('firstname')
.isLength({min:1}).withMessage('First name is required field.')
.isAlpha().withMessage('Only letters are accepted in the name')
.trim()
.escape(),

check('lastname')
.isLength({min:1}).withMessage('First name is required field.')
.isAlpha().withMessage('Only letters are accepted in the name')
.trim()
.escape(),

check('email')
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

