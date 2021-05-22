//9 May

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
