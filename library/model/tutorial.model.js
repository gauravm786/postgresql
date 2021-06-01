//9 May

/*
//creating tutorial.model.js file which will have schema or model for postgres

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
   }) 
   return Tutorial;
}                          
export default tutorial
//I need to configure all my dbconfig and model/schema with sequelize      
*/

//15 may

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
   { timestamps:false}) //to avoid "message": "column \"createdAt\" does not exist" we use timestamps,we get [] on postman 
   return Tutorial;
}                          
export default tutorial
*/

//16 may

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