//creating schema or model for role

const role=(sequelize,Sequelize)=>
{
   const Role = sequelize.define
   ("role",                            
   {                                  
      id:                           
      {
         type:Sequelize.STRING,
         primaryKey: true
      },
      name:
      {
         type:Sequelize.STRING
      },
    },
    {
        timestamps:true
    }
    )
   return Role;
}                          
export default role