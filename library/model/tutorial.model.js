//creating tutorial.model.js file which will have schema or model for postgres


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
