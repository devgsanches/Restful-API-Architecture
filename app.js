const express = require('express')
const routeBook = require('./Routes/book')

const app = express()

const port = 8000 // declaring port

// storing aplication in a port | making it alive
app.listen(port, () => {
})
console.log(`Server is started 🚀 | listening on port ${port}`)

app.use('/books', routeBook)