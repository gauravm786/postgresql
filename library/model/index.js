//9 May

/*
//I need to configure all my dbconfig and model/schema with sequelize      


import pgconfig from '../config/db.postgres.config.js'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model.js';
console.log(pgconfig)

//first of all we did integration for our database configuration with the sequelize which is done here

const sequelize = new Sequelize  //this is the requirement of aour sequelize to get started
(pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD,//here pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD are different parameter which it should required
{    
    host: pgconfig.host,         //we get host from pgconfig and similarly for dialect and pool
    dialect: pgconfig.dialect,
    port:pgconfig.PORT,
    operatorsAliases : false,
    pool:
    {
        max:pgconfig.pool.max,
        min:pgconfig.pool.min,
        acquire:pgconfig.pool.acquire,
        idle:pgconfig.pool.idle
    }
})


//we are including schema with sequelize which is done here 
const db=
{
sequelize:sequelize,
Sequelize:Sequelize,
//sequelize is used here for to make  schema inside the tutorial function 
//Sequelize is the imported one in which we need to use for defining the standard datatypes from the 'sequelize' module.
tutorials:tutorial(sequelize,Sequelize) //using tutoril function from tutorial.model
//we require (sequelize,Sequelize) with our schema ,so that it will be integrted by our sequelize
}
export default db //we will be using this particular database(db) to have multiple databse operation 
//this is one time configuration required for our application 
//we can include multiple attribute with .(dot) operator with the object
//db as object have sequelize,Sequelize and tutorial attributes,db is not empty
*/

//15 may

/*
import pgconfig from '../config/db.postgres.config.js'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model.js';
console.log(pgconfig) //this new thing added and instead of export const,export default is used and function is defined using const

//first of all we did integration for our database configuration with the sequelize which is done here

const sequelize = new Sequelize  //this is the requirement of aour sequelize to get started
(pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD,//here pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD are different parameter which it should required
{    
    host: pgconfig.host,         //we get host from pgconfig and similarly for dialect and pool
    dialect: pgconfig.dialect,
    port:pgconfig.PORT,
    operatorsAliases : false,
    pool:
    {
        max:pgconfig.pool.max,
        min:pgconfig.pool.min,
        acquire:pgconfig.pool.acquire,
        idle:pgconfig.pool.idle
    }
})


//we are including schema with sequelize which is done here 
const db=
{
sequelize:sequelize,
Sequelize:Sequelize,
//sequelize is used here for to make  schema inside the tutorial function 
//Sequelize is the imported one in which we need to use for defining the standard datatypes from the 'sequelize' module.
tutorials:tutorial(sequelize,Sequelize) //using tutoril function from tutorial.model
//we require (sequelize,Sequelize) with our schema ,so that it will be integrted by our sequelize
}
export default db //we will be using this particular database(db) to have multiple databse operation 
//this is one time configuration required for our application 
//we can include multiple attribute with .(dot) operator with the object
//db as object have sequelize,Sequelize and tutorial attributes,db is not empty
*/

//16 may

/*
import pgconfig from '../config/db.postgres.config.js'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model.js';
console.log(pgconfig) //this new thing added and instead of export const,export default is used and function is defined using const

//first of all we did integration for our database configuration with the sequelize which is done here

const sequelize = new Sequelize  //this is the requirement of aour sequelize to get started
(pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD,//here pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD are different parameter which it should required
{    
    host: pgconfig.host,         //we get host from pgconfig and similarly for dialect and pool
    dialect: pgconfig.dialect,
    port:pgconfig.PORT,
    operatorsAliases : false,
    pool:
    {
        max:pgconfig.pool.max,
        min:pgconfig.pool.min,
        acquire:pgconfig.pool.acquire,
        idle:pgconfig.pool.idle
    }
})


//we are including schema with sequelize which is done here 
const db=
{
sequelize:sequelize,
Sequelize:Sequelize,
//sequelize is used here for to make  schema inside the tutorial function 
//Sequelize is the imported one in which we need to use for defining the standard datatypes from the 'sequelize' module.
tutorials:tutorial(sequelize,Sequelize) //using tutoril function from tutorial.model
//we require (sequelize,Sequelize) with our schema ,so that it will be integrted by our sequelize
}
export default db //we will be using this particular database(db) to have multiple databse operation 
//this is one time configuration required for our application 
//we can include multiple attribute with .(dot) operator with the object
//db as object have sequelize,Sequelize and tutorial attributes,db is not empty
*/
