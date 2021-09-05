const jwt = require('jsonwebtoken');

const generateJWT = (userid) => {
    return new Promise((resolve, reject) => {
        const payload = { userid };
    
        jwt.sign(payload, process.env.SECRET, {
            expiresIn: '2h'
        }, (err, token) => {
            if (err) {
                reject('token error');
            } else {
                resolve(token);
            }
        })
    })
}

module.exports = {generateJWT}