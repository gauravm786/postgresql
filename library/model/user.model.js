
const user=(sequelize,Sequelize)=>
{
   const User = sequelize.define
   ("user",                        //defining tutorial
   {                                   //table name is tutorial
      username:                           //title,description and published are column
      {
         type:Sequelize.STRING
      },
      email:
      {
         type:Sequelize.STRING
      },
      password:
      {
         type:Sequelize.STRING
      }
   },
   //{timestamps:false}
   { timestamps:true}) //to avoid "message": "column \"createdAt\" does not exist" we use timestamps:false,we get [] on postman and use timestamps:true while using force method
   return User;
}                          
export default user