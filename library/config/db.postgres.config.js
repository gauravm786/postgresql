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