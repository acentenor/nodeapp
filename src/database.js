const mongoose = require('mongoose');

const db = async() => {
    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    } catch (error) {
        throw new Error('Error al conectar a base de datos');
    }
}

module.exports = {
    db
}