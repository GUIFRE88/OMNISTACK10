const socketio = require('socket.io')

exports.setupWebsocket = (server) => {
    
    const io = socketio(server)

    // Toda vez que tiver um evento WebSocket, envia um objeto socket
    io.on('connection', socket => {
        console.log(socket.id)
        console.log(socket.handshake.query)
    })

}