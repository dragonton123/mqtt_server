var mosca = require('mosca');
// var device_connection = require('./controller/device_status_controller')
var settings = { port:1883 }

var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
});

server.on('clientConnected', function(client) {
	console.log('client connected', client.id);
	var message = {
		topic: '/connection',
		payload: JSON.stringify({client_id:client.id,device_connection:"connected"}), // or a Buffer
		qos: 0, 
		retain: false 
	  };
	  
	  server.publish(message, function() {
		console.log('done!');
	  });


});
server.on('clientDisconnected', function(client) {
	console.log('client disconnected', client.id);
	var message = {
		topic: '/connection',
		payload: JSON.stringify({client_id:client.id,device_connection:"disconnected"}), // or a Buffer
		qos: 0, 
		retain: false
	  };
	  
	  server.publish(message, function() {
		console.log('done!');
	  });
});



server.on('ready', setup);

function setup() {
  console.log('Mosca server is up and running');
}

