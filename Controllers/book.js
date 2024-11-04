// Controllers -> desenvolvimento/função das Rotas

function getBooks(req, res) {
    try {
        res.send("Seus livros estão sendo processados 🖖")
    } catch (error) {
        res.status(404)
        res.send(error.message)
    }
}

function postBooks(req, res) {
    try {
        res.send("Insira um novo livro 🖖")
    } catch (error) {
        res.status(404)
        res.send(error.message)
    }
}

module.exports = {
    getBooks,
    postBooks
}
// passamos em formato de objeto, pois poderemos exportar N funções, como a próxima sendo um postLivros, por exemplo.