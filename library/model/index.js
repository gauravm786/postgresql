
//I need to configure all my dbconfig and model/schema with sequelize      


import pgconfig from '../config/db.postgres.config'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model'

//first of all we did integration for our database configuration with the sequelize which is done here
/* 
const sequelize = new Sequelize  //this is the requirement of aour sequelize to get started
(pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD,//here pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD are different parameter which it should required
{    
    host: pgconfig.host,         //we get host from pgconfig and similarly for dialect and pool
    dialect: pgconfig.dialect,
    operatorsAliases : false,
    pool:
    {
        max:pgconfig.pool.max,
        min:pgconfig.pool.min,
        acquire:pgconfig.pool.acquire,
        idle:pgconfig.pool.idle
    }
})
*/

//we are including schema with sequelize which is done here 
const db={}
db.sequelize=sequelize
db.Sequelize=Sequelize
db.tutorial=tutorial.tutorial(sequelize,Sequelize) //using tutoril function from tutorial.model
//we require (sequelize,Sequelize) with our schema ,so that it will be integrted by our sequelize

export const db //we will be using this particular database(db) to have multiple databse operation 
//this is one time configuration required for our application 
//we can include multiple attribute with .(dot) operator with the object
//db as object have sequelize,Sequelize and tutorial attributes,db is not empty