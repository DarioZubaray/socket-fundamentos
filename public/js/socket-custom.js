var socket = io();

socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('perdimos conexion con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'dario',
    mensaje: 'Hola juli'
}, function(respuesta) {
    console.log('Se disparo el callback: ', respuesta);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
});

function btn_enviar() {
    socket.emit('enviarMensaje', {
        usuario: 'dario',
        mensaje: 'Hola juli'
    }, function(respuesta) {
        console.log('Se disparo el callback: ', respuesta);
    });
}