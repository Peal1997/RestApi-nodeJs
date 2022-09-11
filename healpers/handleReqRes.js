/**
 * Tite : Request Response handle
 * Description: A RESTFul API to monitor up or down time of user defined linked
 * Author: Peal Hasan
 * Date: 8/11/2022
 */

//Dependencies
const url = require('url')
const {StringDecoder} = require('string_decoder')
const routes = require('../routes')
const {notFoundHandler} = require('../handlers/routeHandlers/notFoundHandler')
const { type } = require('os')
const{parseJSON} = require('../healpers/utilities')


//handler-object -module scaffolding
const handler = {}

//handle request and response
handler.handleReqRes = (req, res) => {
    //request handling
    //get the url and parse it
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g , '')
    const methode = req.method.toLowerCase();
    const queryStringObject= parsedUrl.query;
    const headersObject = req.headers;
    
    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        methode,
        queryStringObject,
        headersObject 
    }
    

    const decoder = new StringDecoder('utf-8')
    let realData = ''
       //chose handler
 
       const chosenHandler =   routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    
    req.on('data',(buffer)=> {
         realData += decoder.write(buffer);
    });
    req.on('end',()=> {
       realData += decoder.end() 
       requestProperties.body = parseJSON(realData);

       console.log(requestProperties);
    chosenHandler(requestProperties, (statusCode, payload) => {
         statusCode = typeof(statusCode) === 'number' ? statusCode :500;
         payload = typeof(payload) == 'object' ? payload : {};
        

         const payloadString = JSON.stringify(payload)
         //return the final response
         res.setHeader('Content-Type','application/json')
         res.writeHead(statusCode)
         res.end(payloadString);
    });
    })
   
   
}
module.exports = handler;
