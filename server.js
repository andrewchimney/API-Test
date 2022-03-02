const http = require('http')

const server = http.createServer((req, res) => {
    // Send response
    res.end('{"success": "working", "hello": "world"}')
})
server.listen(process.env.PORT);
