const jwt = require('jsonwebtoken')

function generateToken({email,password}){
    var token = jwt.sign({ email,password }, privateKey, { algorithm: 'RS256' });
    return  token
}