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


//30 may

//to install body-parser cors jsonwebtoken bcryptjs use
//npm install body-parser cors jsonwebtoken bcryptjs --save

import pgconfig from '../config/db.postgres.config.js'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model.js';
import user from './user.model.js'      //after creating role.model.js now import user and role
import role from './role.model.js'
console.log(pgconfig) 


const sequelize = new Sequelize  
(pgconfig.DB, pgconfig.USER, pgconfig.PASSWORD,
{    
    host: pgconfig.host,       
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
});


const db=
{
sequelize:sequelize,
Sequelize:Sequelize,

tutorials:tutorial(sequelize,Sequelize), //create users and roles table using (sequelize,Sequelize)  and it will be created on db tuts on pgadmin
users:user(sequelize,Sequelize),         //here user and role are imported from role.model.js and user.model.js
roles:role(sequelize,Sequelize) 
}

//now we will include ORM relationship or relation between two table like one to many type
//belongsToMany is a keyword
//db.roles.belongsToMany(db.users,{}) this is a basic format of using ORM 
//db.roles.belongsToMany(db.users,{}) //inside this {} through,foreignkey and otherkey keyword are used
//db.users.belongsToMany(db.roles,{}) //inside this {} through,foreignkey and otherkey keyword are used
//here,
//db means database
//roles and users are table
//db.roles and db.users are roles and users table in the database
//db.roles.belongsToMany means that belongsToMany keyword is used for users and roles table
//foreign key is used to take reference from primary key,foreign key is also called as referencing and primary key is called as referenced
//primary key means values inside primary key cannot be repeated and kept blank as primary key contains uique values
//for making connection between primary key and foreign key same datatype should be used

db.roles.belongsToMany(db.users,{ //here db.roles belongs to db.users and db.users is object
        through:"user_roles",     //through keyword is used to connect two tables here user_roles - Join table between user and role.i.e roles(1)--->user(M)  one to many relationship   
        foreignKey:"roleId",      //roleId is a foreignkey as it will take reference from userId    
        otherKey:"userId"         //UserId is an otherkey and it is inside users table
})


db.users.belongsToMany(db.roles,{   //here db.users belongs to db.roles and db.roles is object
        through:"user_roles",       //through keyword is used to connect two tables here user_roles - Join table between user and role.i.e user(1)--->roles(M) one to many relationship
        foreignKey:"userId",        //roleId is a foreign key as it will take reference from userId    
        otherKey:"roleId"           //roleId is an otherkey and it is inside roles table
})

db.ROLES=["user","admin","moderator"] //ROLES is a constraint which db will be using and here user,admin,moderator are the roles to be performed
//User can perform admin,moderator and normal user also
//ROLES makes sure that we dont have to query the data again and again

export default db

//here,
//through:"user_roles" means user_roles table will be created and roleId and userId column will be created

//through:"user_roles" means user_roles table will be created and userId and roleId column will be created 
//otherkey is just key of another table
//db.roles is for mapping and it is used for db connection which acess user 

//cors is nothing but when any of your system tries to interact with backend application if that IP is mentioned over the particular system in that case only it will able to communicate with the server.
//only the system having particular IP LIKE IP:PORT means if IP address is 192.20.0.1 and port 8080
//which react app will be interacting with your database server and now react app will have some server assigned to it and this server will be publically available to any system
//punlic server will go to react app and then react server will go to actual backend server