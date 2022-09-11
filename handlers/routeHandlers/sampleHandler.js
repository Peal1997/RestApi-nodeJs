
/**
 * Tite : sample handler
 * Description: A RESTFul API to monitor up or down time of user defined linked
 * Author: Peal Hasan
 * Date: 8/11/2022
 */

//module scaffolding
const handler = {}

handler.sampleHandler = (requestProperties, callback ) => {
    console.log(requestProperties);
    callback(200, {
    message: 'This is a sample url'
   })
}


module.exports = handler;
