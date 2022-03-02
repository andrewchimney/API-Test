const http = require('http')

const server = http.createServer((req, res) => {
    // Send response
    res.end('Hello World from the server')
})

server.listen(process.env.PORT, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})
