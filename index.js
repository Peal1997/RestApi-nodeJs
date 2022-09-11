/**
 * Tite : Uptime Monitoring Aoolication
 * Description: A RESTFul API to monitor up or down time of user defined linked
 * Author: Peal Hasan
 * Date: 8/11/2022
 */

//dependencies


const http = require('http')
const {handleReqRes} =require('./healpers/handleReqRes')
const environment = require('./healpers/environment')
const data = require('./lib/data')



//app-object -module scaffolding
const app = {}
//testing file system
// data.delete('test', 'newFile', (err) => {
//     console.log(err);
// })
     



// create server
app.createServer = () => {
    const server = http.createServer(handleReqRes);
    server.listen(environment.port,()=> {
        console.log(`listening to port ${environment.port}`);
    });
}




//run the server by calling function
app.createServer();

