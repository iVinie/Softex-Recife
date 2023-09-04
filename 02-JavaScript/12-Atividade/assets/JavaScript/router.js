const express = require("express")
const router = express.Router()

//Rota inicial

router.get("/", (req, res) => {
  res.send({ menssagem: "Hello World!" })
})

module.exports = router
