
/**
 * Tite : not found handler
 * Description: 404 not Found Handler
 * Author: Peal Hasan
 * Date: 8/11/2022
 */

//module scaffolding
const handler = {}

handler.notFoundHandler = (requestProperties,callback) => {
   callback(404, {
    message : 'Your requested url is not found'
   })
}

module.exports = handler;
