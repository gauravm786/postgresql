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
db.tutorial=tutorial.tutorial(sequelize,Sequelize) //using tutorial function from tutorial.model
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

//15 may
 
//library>index.js

/*
import express  from "express"        
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"
import tutorialRouter from "./routes/tutorials.js"
import mongoose from "mongoose"

const dbURL='mongodb+srv://gaurav4:gaurav786@cluster0.b4muw.mongodb.net/library?retryWrites=true&w=majority'
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then                                    
(                               
    (result)=>
    {
        console.log("connected to the Database")
        console.log("server started successfully")
        server.listen(PORT) 
    }
)
.catch  
(
    (err)=>
    {
        console.log(err)
    }
)

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777

server.use("/user",userRouter) 
server.use("/tutorial",tutorialRouter)
server.get("/",homepage)
*/

//libray>config>db.postgres.config.js

/*
const pgconfig =
{
    HOST:"localhost",   //host will be localhost
    PORT:'1234',
    USER:"postgres",    //user for my database is postgres
    PASSWORD:"gaurav786",
    DB:"tuts",           //DB means database name
    dialect:"postgres",  //the sequelize with the help of dailect will understand that a user or developer wants to use postgres as a database configuration
    pool:
    {
        max:5, //it means sequelize will have 5 different connection to the database
        min:0, //i there is no operation in the  database we can flush off all the connection and thats why min is used
        acquire:30000,
        idle:10000
    }
}
export default pgconfig
*/

//library>controllers>tutorial.js


/*
import db from '../model/index.js'  //if you write file(instead or in place of model),in that file whatever export you have done that will get assigned to db alias 
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
*/


/*
error on postman:
{
    "message": "password authentication failed for user \"postgres\""//tutorials table does not exist
}
Reason:since we have created the schema but that schema/table does not exist there in database
now go to pgadmin and create table inside pgadmin
*/

//library>model>index.js


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
export default db 
*/

//library>model>tutorial.model.js

/*
const tutorial=(sequelize,Sequelize)=>
{
   const Tutorial = sequelize.define
   ("tutorial",                        //defining tutorial
   {                                   //table name is tutorial
      title:                           //title,description and published are column
      {
         type:Sequelize.STRING
      },
      description:
      {
         type:Sequelize.STRING
      },
      published:
      {
         type:Sequelize.STRING
      }
   },
   { timestamps:false}) //to avoid "message": "column \"createdAt\" does not exist" we use timestamps:false,we get [] on postman 
   return Tutorial;
}                          
export default tutorial
*/

//library>routes>tutorial.js


/*
//creating new router for postgresql

import express from "express"
//while runnung the application node will try to include code of express to your code  
//we need to use express for router

import {getAllTutorialsByTitle} from '../controllers/tutorial.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getAllTutorialsByTitle)

export default router
*/

//16 May

//library>index.js


/*
import express  from "express"        
import bodyparser from "body-parser"
import userRouter from "./routes/users.js"
import tutorialRouter from "./routes/tutorials.js"
import mongoose from "mongoose"
//import pgdb from './model/index.js'; //before
//pgdb.sequelize.sync() //sync means synchronize,it means at two particular places we synchronize the data,if table is not there in db or that model or schema is not there in db then sync() behaviour will makes sure it is there,if not then it will create for you
import pgdb from './model/index.js';      //synchronize can lead to sequelizedatabaseerror //here force is keyword and its value is true
//sequelizedatabaseerror will occur while using post request and to avoid it we use force,it automaticaaly delete previous record and stores new record in the table,sequelizedatabaseerror means data is already is existing in the table
pgdb.sequelize.sync({force:true})  //using force:true method will help us to create  createdAt,updatedAt with timestamp on pgadmin and sync() function will gives you promise .then and .catch()
.then
((result)=>
{
    console.log("++++++++++++")
    console.log(result)
    console.log("++++++++++++")
})
.catch
((err)=>
{
    console.log("@@@@@@@@@@@@")
    console.log(err)
    console.log("@@@@@@@@@@@@")
})

const dbURL='mongodb+srv://gaurav4:gaurav786@cluster0.b4muw.mongodb.net/library?retryWrites=true&w=majority'
mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then                                    
(                               
    (result)=>
    {
        console.log("connected to the Database")
        console.log("server started successfully")
        server.listen(PORT) 
    }
)
.catch  
(
    (err)=>
    {
        console.log(err)
    }
)

const server = express()
const PORT=7777
server.use(bodyparser.json())

var homepage=(req,res)=>res.send("Welcome to my library") //handle http://localhost:7777

server.use("/user",userRouter) 
server.use("/tutorial",tutorialRouter)
server.get("/",homepage)
*/

//library>controllers>user.js

/*
import {User} from '../model/users.js'

//in controllers we define functions

let users=[]

export const getUsers=(req,res)=>
{
    console.log("Hi")
    console.log(req.query) //for getting filtered data query is used
    if(req.query.age) //for passing user age as query,req.query.age is used
    {
        getUsersByAge(req,res)//add getUsersByAge API inside getUser API as aggregate function is used inside getUserByAge API
    }
    else
    {
        console.log("In function call getUser().. I this /users endpoint got hit.")
        User.find() 
        .then 
        (
            (result)=>
            {
                res.send(result)
            }
        )
        .catch
        (
            (err)=>
            {
                console.log(err)
    
            }
        ) 
    }
}    

//libray>config>db.postgres.config.js 

/*
const pgconfig =
{
    HOST:"localhost",   //host will be localhost
    PORT:'1234',
    USER:"postgres",    //user for my database is postgres
    PASSWORD:"gaurav786",
    DB:"tuts",           //DB means database name
    dialect:"postgres",  //the sequelize with the help of dailect will understand that a user or developer wants to use postgres as a database configuration
    pool:
    {
        max:5, //it means sequelize will have 5 different connection to the database
        min:0, //i there is no operation in the  database we can flush off all the connection and thats why min is used
        acquire:30000,
        idle:10000
    }
}
export default pgconfig
*/

//library>controllers>tutorial.js  //changes


/*
import db from '../model/index.js';  //if you write file(instead or in place of model),in that file whatever export you have done that will get assigned to db alias 
import tutorial from '../model/tutorial.model.js';
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
}


//format 
//first a function
//const tutorial={
    title:"aa",
    description:"bb",
    published:"cc"
}
//Tutorials.create(tutorial)

export const createTutorial=(req,res)=>
{
    if(req.body.description==null || req.body.title ==null)
    {
        res.status(400).send
        ({
            message:"Insufficient data..please try again"//here we dont need err as err is not defined 
        })
    }
    const tutorial = //creating object tutorial
    {
        title:req.body.title, //directly extracting values from body
        published:req.body.published ? req.body.published : false,//alternative of if condition is ternary operator and for that published should be boolean is schema instead of Strig
        //if there is some value inside req.body.published then it will be stored inside published and if not then go to  req.body.published : false
        description:req.body.description
    }
    Tutorials.create(tutorial)//it makes sure that data is saved and to know that we use promise(.then and .catch) 
    .then
    (
        (result)=>
        {
            res.status(201).send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            res.status(500).send
            ({
                message:err || "Internal DB error"
            })

        }
    )
}

export const deleteTutorialById=(req,res)=>
{
    Tutorials.destroy //destroy is used to delete record in the table
    (
        {where :{id:req.params.id}}
    )
    .then
    (
        (result)=>
        {
            if(result == 1) //result==1 is used to match the id (it means one record/id get deleted which is requested and not other id)
            {
            res.status(200).send
            ({message:"Tutorial was deleted"})
            }
            else
            {
            res.status(422).send
            ({message:"This id does not exist in the table"})
            }
        }
    )
    .catch
    (
        (err)=>
        {
            res.status(500).send
            ({ message:err || "Internal DB error"})
        }
    )
}
        

export const updateTutorialById=(req,res)=>
{
    Tutorials.update
    (
        req.body,                  //the first parameter is body which you want to update
        {where :{id:req.params.id}}//it will try to find it out based on id,so id is passed here using where clause
    )//it will try to match particular id and get that data
    .then
    (
        (result)=>
        {
            if(result == 1)//if result==1(it means check the value of result,if it is one then upate the one record,if not one(record does not exist) then move on) 
            {
            res.status(200).send
            ({message:"Tutorial was updated"})
            }
            else
            {
            res.status(422).send
            ({message:"This id does not exist in the table"})
            }
        }
    )
    .catch
    (
        (err)=>
        {
            res.status(500).send
            ({ message:err || "Internal DB error"})
        }
    )
}
        
//To delete the entire table    


export const deleteTutorials=(req,res)=>
{
    Tutorials.destroy 
    (
        {
        where :{},//in where clause we will not pass anything as we need to delete entire table
        truncate:false
        }
    )
    .then
    (
        (result)=>//here result will carry how many number of rows got deleted(it means how many number of records get deleted)
        {         //e.g:- 1 Tutorial was deleted,2 Tutorial was deleted
            res.status(200).send
            ({message:`${result} Tutorial was deleted`})//this whole content will be replaced by value of result{result}
        }
    )
    .catch
    (
        (err)=>
        {
            res.status(500).send
            ({ message:err || "Internal DB error"})
        }
    )
}
//delete is used to delete the specific data/id or record in the table and truncate is used to delete the entire record in the table(but not the table)
//ddl stands for data definition language and dml stands for data manipulation language
//truncate is ddl and delete is dml
*/

/*
//geeksforgeeks
Difference between DDL and DML:

DDL	                                                                                                   DML
It stands for Data Definition Language.	                                                             It stands for Data Manipulation Language.
It is used to create database schema and can be used to define some constraints as well.	         It is used to add, retrieve or update the data.
It basically defines the column (Attributes) of the table.	                                         It add or update the row of the table.These rows are called as tuple.
It doesn’t have any further classification.	                                                         It is further classified into Procedural and Non-Procedural DML.
Basic command present in DDL are CREATE, DROP, RENAME, ALTER etc.	                                 BASIC command present in DML are UPDATE, INSERT, MERGE etc.
DDL does not use WHERE clause in its statement.	                                                     While DML uses WHERE clause in its statement.
*/

/*
Although TRUNCATE TABLE is similar to DELETE, it is classified as a DDL statement rather than a DML statement. It differs from DELETE in the following ways:

Truncate operations drop and re-create the table, which is much faster than deleting rows one by one, particularly for large tables.

Truncate operations cause an implicit commit, and so cannot be rolled back. 
*/


/*
//Tutorialspoint
Sr.No.	Key	                DDL                                                 	                             DML
1	    Stands for	        DDL stands for Data Definition Language.	                                         DML stands for Data Manipulation Language.
2	    Usage	            DDL statements are used to create database, schema, constraints, users, tables etc.	 DML statement is used to insert, update or delete the records.
3	    Classification	    DDL has no further classification.	                                                 DML is further classified into procedural DML and non-procedural DML.
4	    Commands	        CREATE, DROP, RENAME and ALTER.	                                                     INSERT, UPDATE and DELETE.
*/

//library>model>index.js


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

//library>model>tutorial.model.js


/*
const tutorial=(sequelize,Sequelize)=>
{
   const Tutorial = sequelize.define
   ("tutorial",                        //defining tutorial
   {                                   //table name is tutorial
      title:                           //title,description and published are column
      {
         type:Sequelize.STRING
      },
      description:
      {
         type:Sequelize.STRING
      },
      published:
      {
         type:Sequelize.STRING
      }
   },
   //{timestamps:false}
   { timestamps:true}) //to avoid "message": "column \"createdAt\" does not exist" we use timestamps:false,we get [] on postman and use timestamps:true while using force method
   return Tutorial;
}                          
export default tutorial
*/

//library>routes>tutorials.js

/*
//creating new router for postgresql

import express from "express"
//while running the application node will try to include code of express to your code  
//we need to use express for router

import {getAllTutorialsByTitle,createTutorial,deleteTutorialById,updateTutorialById,deleteTutorials} from '../controllers/tutorial.js'
//to import multiple functions at same time we use import{}
// and using '../controllers/users.js' we go back to previous folder and import function from the given folder.Here it is controller


const router = express.Router();
//we will need to get router which we will get from express so for that we will use const variable

router.get("/",getAllTutorialsByTitle)
router.post("/",createTutorial)
router.delete("/",deleteTutorials)
router.delete("/:id",deleteTutorialById)
router.put("/:id",updateTutorialById)
export default router
*/
