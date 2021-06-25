//3 june
import jwt from 'jsonwebtoken'
import { noExtendLeft } from 'sequelize/types/lib/operators';
import config from '../config/auth.config.js'
import db from '../model/index.js'
import user from '../model/user.model.js';

verifyToken=()=>
{
    let token = req.header["X-access-token"];
    if(!token)
    {
        return res.status(401).send({
            message:"No token provided,Access forbidden"
        })
    }
    jwt.verify(token,config.secret,(err,decode)=>
    {
        if(err)
        {
            return res.status(402).send({
                message:"unauthorized!"
            })
        }
        req.userId=decode.id
        next();
    })
}

isAdmin = (req,res,next)=>
{
    user.findByPk(req.userId)
    .then(
        (user)=>{
            user.getRoles()
            .then(
                (roles)=>
                {
                    for(let i=0;i<roles.length;i++)
                    {
                        if(roles[i].name==="admin")
                        console.log("User is admin")
                        next()
                        return
                    }
                    res.status(403).send({
                        message:"Forbidden"
                    })
                }
               
            )
        }
    )
}

const authJWT = {
    verifyToken:verifyToken,
    isAdmin:isAdmin
}

export default authJWT