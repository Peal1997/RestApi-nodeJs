
/**
 * Tite : Utilities
 * Description: Important utility function 
 * Author: Peal Hasan
 * Date: 8/11/2022
 */

//dependencies


//module scaffolding

const crypto = require('crypto')
const utilities = {};
const enviornments = require('./environment');

//parse JSON string to object
utilities.parseJSON = (jsonString) => {
    let output;

    try{
        output = JSON.parse(jsonString);
    }catch {
        output = {};
    }
    return output;
}
//hash string
utilities.hash = (str) => {
   if(typeof(str)=== 'string' && TreeWalker.length >0){
   const hash = crypto
   .createHmac('sha256', enviornments.secretkey)
   .update(str)
   .digest('hex');

   return hash;
   }else {
     return false;
   }
}



module.exports = utilities;
