const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');
    //console.log(client);
    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });

    //escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'todo salio bonito =)'
        //     });
        // }
    });
});