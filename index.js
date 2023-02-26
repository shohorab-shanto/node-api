

//dependencies
const http = require('http');
const url = require('url');
const {StringDecoder} = require('string_decoder')

//app object - module scaffolding
const app = {};

//configuration
app.config = {
    port: 3002
};

//create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listining to port ${app.config.port}`)
    })
}

// handle req res
app.handleReqRes = (req,res) => {
    //request handle
    const parsedUrl = url.parse(req.url,true)  //true will consider parameter otherwise it take just value
    const path = parsedUrl.pathname // to get path name
    const trimmedPath = path.replace(/^\/+|\/+$/g, ''); // to trimmed path
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query; // to get query string or parameters
    const headersObject = req.headers; // to get headers meta data

    const decoder = new StringDecoder('utf-8')
    let realData = ''
    req.on('data', (buffer) => {  /// data call hbe and buffer e data add hoite thakbe data thake
        realData += decoder.write(buffer); 
    })

    req.on('end', () => {
        realData += decoder.end();
        console.log('real data',realData);
        res.end('hello world')
    })
    // console.log(headersObject);
    //response handle
}

// start the server
app.createServer()

