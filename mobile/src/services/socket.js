import socketio from 'socket.io-client'

const socket = socketio('http://192.168.0.82:3333', {
    autoConnect: false,
})

function connect(latitude, longitude, techs){
   
    // Envia parâmetros para o Backend
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    }
    
    // Realiza a conexão
    socket.connect()
}

function disconnect(){

    if(socket.connected){
        socket.disconnect()
    }
    
}

export {
    connect, 
    disconnect
}