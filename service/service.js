// var fetch = require('node-fetch')

// export const ip = "http://127.0.0.1:3013/api/v1/"
var request = require('request');
var constance = require('../const/constance')
exports.post = function (object, path, token) {

    request({
        method: 'POST',
        uri: constance.ip + path,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': + token
        },
        "body": JSON.stringify(object)


    }, (err, httpResponse, body) => {
        if (err) {
            console.log(err);
        } else {
            // req.result = httpResponse
            // next();
        }
    });
}





//     exports.post = (object,path,token) => new Promise((resolve, reject)=> { 
//     fetch(ip + path, { 
//         method: 'POST', 
//         headers: { 
//             'Authorization': token, 
//             'Accept': 'application/json', 
//             'Content-Type': 'application/json' 
//         }, body: JSON.stringify(object) 
//     }).then(res => { 
//         setTimeout(() => null, 0); 
//         return res.json() 
//     }).then(json => { 
//         resolve(json); 
//     }).catch((err) => reject(err)) 

// }) 




// exports.get = (path,token) =>  new Promise((resolve, reject) =>{ 
//     fetch(ip + path, { 
//         method: 'GET', 
//         headers: { 
//             'Authorization': token, 
//             'Accept': 'application/json', 
//             'Content-Type': 'application/json' 
//         } 
//     }).then(res => { 
//         setTimeout(() => null, 0); 
//         return res.json() 
//     }).then(json => { 
//         resolve(json); 
//     }).catch((err) => reject(err)) 

// }) 
// export const get_other = (path,token) =>  new Promise((resolve, reject) =>{ 
//     fetch(path, { 
//         method: 'GET', 
//         mode: 'no-cors'
//     }).then(res => { 
//         setTimeout(() => null, 0); 
//         return res.blob() 
//     }).then(blob => { 
//         console.log(blob)
//         resolve(blob); 
//     }).catch((err) => reject(err)) 

// }) 