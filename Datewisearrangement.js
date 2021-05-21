//9 May

//packagejson.js

/*
//understanding package.json

//copied package.json from onlygaurav>javascriptpractice>library>package.json


//in npm we have pakage.json file
//in scripts key we add multiple commands

//to use npm and to do git push 
//whatever command we use we need to insert into scripts key
//to start application we use node filename
//if we dont want to use node and we are in development phase we can use nodemon index.js 
//and now we can go on command line and type npm run start to run start key in scripts
//if we change start to devstart in scripts and use npm run start,it will show error
//so we should use npm run devstart instead of npm run start
//if we use npm run test and actual command which  will execute will be  git push 
//similarly if we use npm run start then it will execute nodemon index.js and for devstart nodemon indexs.js will be exexcuted
//if we run key then value will be executed
//we can use both npm run start and npm start to execute the command
//to handle postgresql we need sequelize,this sequelize is nothing but ORM,ORM is nothing but object relatioal mapping which helps to map object to relation and this relation is further stored into the database
//pg will maintain connection with database and sequelize will provide the ORM  and pg-hstore will be the mediator between sequelize and pg
//use of dependencies key in package.json:-dependencies key contain all the dependencies for our application
//for running our application we require node_modules
//if we delete node_modules folder and use npm start our application will not work  because dependencies is not present inside node_modules
//npm i makes sure that all required dependencies is there available into the  system
//in new system if we want to execute the application we use npm i
/*
{
    "name": "library",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "git push",
      "start": "nodemon index.js"
      "devstart":"nodemon indexs.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "dependencies": {
      "express": "^4.17.1",
      "g": "^2.0.1",
      "mongoose": "^5.12.7",
      "nodemon": "^2.0.7"
    },
    "type": "module"
  }

//to install pg sequelize and pg-hstore use
//npm install pg sequelize pg-hstore
*/

//config>db.postgres.config.js

/*
//for congifuration for db(this configuration can be given for  postgres,mongodb,mysql and for different types of db) 
//as my node application require different types of db,if we include configuration of different types of db inside index.js it will create confusion 
//to avoid confusion we are creating new folder named confing and inside that folder we will create db.postgres.config.js folder
//we will export variable which is basically used by our sequelize,ORM(as sequelize,ORM require db connection) and for db connection we will include it via pg 

//this is basic configuration which will be required to connect to postgres database

export const pdb =
{
    HOST:"localhost",   //host will be localhost
    USER:"postgres",    //user for my database is postgres
    PASSWORD:"",
    DB:"tuts",           //DB means database name
    dailect:"postgres",  //the sequelize with the help of dailect will understand that a user or developer wants to use postgres as a database configuration
    pool:
    {
        max:5, //it means sequelize will have 5 different connection to the database
        min:0, //i there is no operation in the  database we can flush off all the connection and thats why min is used
        acquire:30000,
        idle:10000
    }
}
*/

//model>tutorial.model.js

//creating tutorial.model.js file which will have schema or model for postgres

/*
export const tutorial=(sequelize,Sequelize)=>    
{
    const Tutorial= sequelize.define   //defining tutorial
    ("tutorial",                       //table name is tutorial
    {                                  //title,description and published are column
        title:
        {
           type: Sequelize.String
        },

        description:
        {
           type: Sequelize.String
        },

        published:
        {
           type: Sequelize.String
        },
    })
    return Tutorial;
}

//I need to configure all my dbconfig and model/schema with sequelize      
*/

//model>index.js

/*
//I need to configure all my dbconfig and model/schema with sequelize      

import pgconfig from '../config/db.postgres.config'
import Sequelize from 'sequelize';
import tutorial from './tutorial.model'

//first of all we did integration for our database configuration with the sequelize which is done here

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
*/

//controllers>tutorial.js

/*
import db from '../model'  //if you write file(instead or in place of model),in that file whatever export you have done that will get assigned to db alias 
const Tutorials = db.tutorials;//if you write folder(istead or in place of model),then it will directly go for index.js file,if ou want to make folder as a module which can be imported later in that case we must have index.js file inside that folder,in index.js file whatever thing you have exportedl,that is exported thing will be be assigned to db.whatever things we have exported in index.jsfile that will be assigned to db.
const Op=db.sequelize.Op;       //op is nothing but sequelize op

export const getAllTutorialsByTitle = (req,res)=>//getAllTutorials is given by Titlt
{
    const title = req.query.title //in request i will get back title,so it is catched here from the request
    var condition = title ? { title: {[op.ilike]:`%${title}`}}:null;  //ternary operaror is used  title ? { title: {[op.ilike]:`%${title}`}}:null; ,ilike is type of operator,ilike will try to match given $title with title of leftsude,if it will be matched then all the rows will be thrown otherwise null will be printed
                                                                      // [op.ilike] is used by sequelize
    Tutorials.findAll({where:condition}) //this is used to retrieve data from sql  //findall is the utility in the sequelize ORM,so for each schema findAll can be used 
    .then
    (data=>
        {
            res.send(data) //sending data out,if something wet wron g then catch is used 
    })
    .catch
    (err=>     //here err is an object
        {
            res.status(500).send //500 means internal error of database 
            ({
                message: err.message || "some error occured while retrieving tutorials" //err.message is an attribute associated with object named err
            })//if err.message is empty then "some error occured while retrieving tutorials" will be printed using OR operator
    })    
};

//string literals:-
//in general we use "Hello"+var+"2021" here var=world
//in string literal we use `Hello %${world} 2021` to avoid + operator as it is expensive,more function needs to be defined

//model is imported because in model we have expoerted standard sequelize via db,so db is used inside controller
//ternary operator is the condition passed for where clause
//where clause sees that if given title is matched if it is similar to the title i have it will throw out otherwise null is thrown out  
*/