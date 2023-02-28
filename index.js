

//dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes')

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
app.handleReqRes = handleReqRes

// start the server
app.createServer()

