const { Router } = require('express')
// ferramenta do Express para criar Rotas

const { getBooks, postBooks } = require("../Controllers/book")
// importando Rota lógica do Controller

const router = Router()

router.get('/', getBooks)

router.post('/', postBooks)

router.patch('/', (req, res) => {
    res.send("Você fez uma requisição do tipo PATCH")
})

router.delete('/', (req, res) => {
    res.send("Você fez uma requisição do tipo DELETE")
})



module.exports = router
// exportando todas as routers, independente de sua ação/metodo HTTP

