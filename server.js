const http  = require('http');
const ab = {
    a:4,
    b:5
}

const server = http.createServer((request , response) => {
    // console.log("header",request.headers);
    console.log("urls",request.url);
    // console.log("method",request.method)
    response.setHeader('Content-Type', 'application/json');
    response.send(JSON.stringify(ab))
})

server.listen(3000)



