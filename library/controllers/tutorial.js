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