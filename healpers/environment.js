
/**
 * Tite : Environment
 * Description: Handle all environment
 * Author: Peal Hasan
 * Date: 8/11/2022
 */

//dependencies


//module scaffolding

const environments = {}

environments.staging = {
    port : 3000,
    envName: 'staging',
    secretkey : 'dfdfgdafgdfdfadsffsdafadsf'
};
environments.production = {
    port : 5000,
    envName: 'production',
    secretkey : 'treytwytwytyutruyeyuye'
};

//determine which was passeed

const currentEnviornment = typeof process.env.NODE_ENV  === 'string' ? process.env.NODE_ENV : 'staging'

//exort corresponding environment objet

const environmentToExport = typeof environments[currentEnviornment]  == 'object' ? environments[currentEnviornment] : environments.staging;

module.exports = environmentToExport;
