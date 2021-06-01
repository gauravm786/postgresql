//9 May

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


//string literals:-
//in general we use "Hello"+var+"2021" here var=world
//in string literal we use `Hello %${world} 2021` to avoid + operator as it is expensive,more function needs to be defined

//model is imported because in model we have expoerted standard sequelize via db,so db is used inside controller
//ternary operator is the condition passed for where clause
//where clause sees that if given title is matched if it is similar to the title i have it will throw out otherwise null is thrown out  
*/

//15 may

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
    "message": "password authentication failed for user \"postgres\""
}
Reason:since we have created the schema but that schema/table does not exist there in database
now go to pgadmin and create table inside pgadmin
*/

//16 may

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