var db = require('../connection/dbConnection')
var service = require('../service/service')

exports.device_connected = function (client_id) {
    db.query(`UPDATE  device_information SET device_active = 'online' WHERE client_id = '${client_id}'`, function (err, DeviceResult) {
        if (err) throw err;
        let object = {
            client_id:client_id
        }

        service.post(object,'hardware/hardware_emit_connection',null)
    })
}


exports.device_disconnected = function (client_id) {
    db.query(`UPDATE  device_information SET device_active = 'offline' WHERE client_id = '${client_id}' `, function (err, DeviceResult) {
        if (err) throw err;
        let object = {
            client_id:client_id
        }
        service.post(object,'hardware/hardware_emit_connection',null)
    })
}



