const { generateJWT } = require('../src/generate-jwt');
const bcryptjs = require('bcryptjs')

const User = require('../models/user')

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                msg: 'Usuario no existe'
            })
        }
        const passwordValidation = bcryptjs.compareSync(password, user.password);
        if (!passwordValidation) {
            return res.status(400).json({
                msg: 'Credenciales no son válidas'
            });
        }

        const token = await generateJWT(user.id);
        res.json({
            user,
            token
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Error'
        });
    }

}

module.exports = {
    login
}
