/**
 * Tite : Route
 * Description: A RESTFul API to monitor up or down time of user defined linked
 * Author: Peal Hasan
 * Date: 8/11/2022
 */

//dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandler')
const {userHandler} = require('./handlers/routeHandlers/userHandler')
const routes = {
    sample : sampleHandler, 
    user : userHandler
    
    
}

module.exports = routes;

