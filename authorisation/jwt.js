const jwt = require('jsonwebtoken')
const privateKey= process.env.PRIVATE_KEY

function generateToken(email,password){
    var token = jwt.sign({ email,password }, privateKey, { algorithm: 'RS256' });
    return  token
}

module.exports=generateToken