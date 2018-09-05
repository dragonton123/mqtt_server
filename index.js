var mosca = require('mosca');
var device_connection = require('./controller/device_status_controller')
var settings = {
		port:1884
		}

var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
});

server.on('clientConnected', function(client) {
	console.log('client connected', client.id);
	let connect_index =  client.id.indexOf("mqttjs");
	if(connect_index<0){
		console.log("not_server")
		device_connection.device_connected(client.id)
	}

});
server.on('clientDisconnected', function(client) {
	console.log('client disconnected', client.id);
	let disconnect_index =  client.id.indexOf("mqttjs");
	if(disconnect_index<0){
		console.log("not_server")
		device_connection.device_disconnected(client.id)
	}
});

