const express = require('express')
//Import do graphqlHTTP que cria um servidor preparado pro GraphQL + HTTP
const {graphqlHTTP, schema} = require('express-graphql') 

//Exporta uma função
module.exports = () => {
    //Cria uma variavel recebendo a instancia do express
    const app = express()
    //Resolve a questão do cross-domain
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Alow-Headers', 'Origin, x-Request-With, Content-type, Accept')
        next()
    })
    
  //Registrando a rota '/player'
    app.use(
        '/player',
        graphqlHTTP({
            schema,
            graphql: true,
        }),//Passando a instancia da função graphqlHTTP
    )

    //retorna instacia do express
    return app
}