//Configuração inicial
const express = require("express")
const app = express()
const router = require('./assets/JavaScript/router')
//forma de ler JSON
app.use(
    express.urlencoded({
      extended: true,
    })
  )
  app.use(express.json())

//Entregar uma porta
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Servidor está rodando na porta ${PORT}`);
  });

  app.use('/', router);