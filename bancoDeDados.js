const mongoose = require('mongoose')

require('dotenv').config()

async function conectaBancoDeDados() {
try {
    console.log('Connexão como Banco de dados iniciou')

    await mongoose.connect(process.env.MONGO_URL)
    
    console.log('Conexão como banco de daddos feita com sucesso!')
} catch(error) {
    console.log(error)
}
}

module.exports = conectaBancoDeDados