const { compareHashFromPassword } = require('../helpers/bcrypt')
const { signPayload } = require('../helpers/jwt')
const { User } = require('../models')

class userController {

    static async login (req, res, next) {
        try {
            const {email, password} = req.body
            console.log('MASUK LOGIN GAK PLEASE')
            console.log(req.body, '<<<<<<<<< INI REQ BODYNYA')

            if(!email) {
                throw {name: 'Email is required'} //error 1
            }

            if(!password) {
                throw {name: 'Password is required'} //error 2
            }

            const user = await User.findOne({
                where : {
                    email
                }
            })

            let isValid = compareHashFromPassword(password, user.password)

            if(!isValid || !user) {
                throw {name: 'Invalid email/password'} // error 3
            }

            let payload = {
                id : user.id,
            }

            let access_token = signPayload(payload)

            res.status(200).json({access_token})
        } catch (error) {
            console.log(error)
            next(error)
        }
    }

    static async register (req, res, next) {
        try {
            const { username, email, password, address, phoneNumber } = req.body
            const user = await User.create({
                username,
                email, 
                password,
                address,
                phoneNumber,
                role : 'Admin'
            })

            res.status(201).json({message:'Registered success'})
        } catch (error) {
            next(error)
        }
    }

   

}

module.exports = userController