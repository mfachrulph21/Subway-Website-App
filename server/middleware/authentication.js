const { verifyPayload } = require('../helpers/jwt')
const { User } = require('../models')

async function authentication (req, res, next) {
    try {
        let access_token = req.headers.access_token

        if(!access_token) {
            throw {name: 'User not login yet'} //error 1
        }

        let payload = verifyPayload(access_token)

        let user = await User.findByPk(payload.id)

        if(!user) {
            throw {name: 'This account not registered'} //error 2
        }

        req.user = {
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role
        }
        console.log('MASUK AUTHEN')
        next()
        
    } catch (error) {
        next(error)
    }
}

module.exports = authentication