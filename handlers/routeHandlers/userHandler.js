/**
 * Tite : User Handler
 * Description: Handler to handle user related routs
 * Author: Peal Hasan
 * Date: 8/13/2022
 */

//dependencies
const data = require('../../lib/data')
const {hash} = require('../../healpers/utilities')

//module scaffolding
const handler = {}

handler.userHandler = (requestProperties, callback ) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete' ]
    if(acceptedMethods.indexOf(requestProperties.methode) > -1){
             handler._user[requestProperties.methode](requestProperties, callback);
    }else {
        callback(405)
    }
     
}
handler._user = {};

handler._user.post = (requestProperties, callback) => {
 
   const firstName = typeof(requestProperties.body.firstName) === 'string' &&  requestProperties.body.firstName.trim().length > 0 ? requestProperties.body.firstName : false;

   const lastName = typeof(requestProperties.body.lastName) === 'string' &&  requestProperties.body.lastName.trim().length > 0 ? requestProperties.body.lastName : false;

   const phone = typeof(requestProperties.body.phone) === 'string' &&  requestProperties.body.phone.trim().length === 11 ? requestProperties.body.phone : false;

   const password = typeof(requestProperties.body.password) === 'string' &&  requestProperties.body.password.trim().length > 0 ? requestProperties.body.password : false;

   const tosAgreement = typeof(requestProperties.body.tosAgreement) === 'boolean' &&  requestProperties.body.tosAgreement.length > 0 ? requestProperties.body.tosAgreement : false;
  console.log(typeof password);
   if(firstName && lastName && phone && password && tosAgreement ) {
           //make sure that the user already does not exist 
            data.read('user',phone,(err, user) => {
                if(err) {
                  //go next
                  const userObject ={
                    firstName,
                    lastName,
                    phone,
                    password : hash(password),
                    tosAgreement
                  }
                  //store the user database
                  data.create('user', phone, userObject, (err)=> {
                    if(!err) {
                          callback(200,{
                            message : 'user was created successful'
                          })
                    }else {
                      callback(500, {'error': 'could not create user'})
                    }
                  });
                }else {
                  callback(500, {
                    error : 'There was a problem in derver side!'
                  })
                }
            })
   }else {
     callback(400, {
        error : `you have a problem in your request`
     })
   }
}
handler._user.get = (requestProperties, callback) => {
   
}
handler._user.put = (requestProperties, callback) => {

}
handler._user.delete = (requestProperties, callback) => {

}


module.exports = handler;
