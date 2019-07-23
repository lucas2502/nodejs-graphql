//Importa a configuração criada e cria uma intancia do Express
const app = require('./config/express.config.js')()

//Define uma porta padrão, caso não tenha alguma passada por variáveis de ambiente
const port = process.env.PORT || 8080


app.listen(port, () => {
    console.log(`Server is runing in port ${port}`)
})
