
import pgdb from '../model/index.js';
const ROLES =pgdb.ROLES                    //created ROLES and User using const and pgdb.ROLES and pgdb.User is imported from index.js 
const User =pgdb.User


export const checkDuplicateUsernameOrEmail = (req, res, next)=>     //here username is checked and if it is  failed then further process going to email will be stopped
{   
    User.findOne({                                //to find data from the table findone function is used
        where:{username : req.body.username}
    })
    .then(
        user =>
        {
            if(user)
            {
                res.status(400).send({
                    message:"Failed! Username already exist"
                })
                return;
            }
            //check email  or verify email
            User.findOne({
                where:{ username:req.body.username }
            })
            .then(
                user =>{
                    if(user)
            {
                res.status(400).send({
                    message:"Failed! Username already exist"
                })
                return;
            }
            next();
                }
            )
          
        }    
    )    
}    
                
            
        
export const checkRolesExisted = (req,res,next)=>       //here we check whether  roles exist or not
{
    if(req.body.roles){
        for(let i=0;i<req.body.roles.length;i++)
        {
            if(!ROLES.includes(req.body.roles[i]))     
            //here if(!ROLES.includes(req.body.roles[i])) is same as if(!ROLES.includes(req.body.roles[i])==false)  both are same   
             // if requested roles is not existed in ROLES  and then we send error message(Failed! Roles does not exist) and for ! mark is used before Role
            {                                
                res.status(400).send({
                    message:"Failed! Roles does not exist" + req.body.roles[i]
                })
                return;
            }
        }
    }
    next();
}