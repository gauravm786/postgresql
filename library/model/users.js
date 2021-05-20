//3,4,10,11 April

/*
//after making router and controller we create model
//every record which will be stored inside the document that will be in the form of schema,schema is nothing but definition how it should look like
//for creating schema need to import mongoose
import mongoose from 'mongoose'
//after this we must get get schema out of it
const Schema = mongoose.Schema

//create schema for user
const userSchema = new Schema //new operator schema function(new Schema())     //this is defining part
(
    {
        name:
        {
            type:String,//name attribute should be in String form
            required:true//tue,whether string is required or not
        },
        gender:
        {
            type:String,
            required:true
        },
        age:
        {
            type:String,
            required:true
        },
        city:
        {
            type:String,
            required:true
        }
    },{timestamps:true} //shows date,when schema is created on postman
)
export const User=mongoose.model('User',userSchema)                     //this is create in  collectin or database
//model is like a class and how model shoiuld look like,we defined it using schema
//model is nothing but,out of schema you need to tell your mongodb,that i need to create user model,so for that we use .model operator
//so whenever .model will connect to your database,it will check whether you have User model there are not 
//basically it will see documnent object,if there is no document object then it will create one,if it is there it will leave as it is 
//and that model must have some schema,it must have some rule defined to it that how it should look like 
//so for creating model into a database,we basically require to pass the schema mongoose.model
//here User variable is used to create differen user model object in later coding and thats why it is exported out
*/