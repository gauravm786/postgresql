/*
//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)  //send all the user
}

export const createUser=(req,res)=>
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    res.send("ok")
}
*/

//4 aptil

/*
//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    res.send(users)
}

export const createUser=(req,res)=>        //createUser is used for creating new user
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    //res.send("ok")
    user.push(req.body) //it will send [] as output on postman if we use http://localhost:7777/user

    // when the request is sent from frontend to backend
    //data(body) will be wrapped in JSON format and sent as a request from frontend to backend
    //now backend will capture this data(body) either in database or users Array(taht we are using in our case)
    //so that data(body) is available as req.body
    //whatever data(body) is sent from frontend to backend that body will be captured or available inside req.body
    //now i need to store data of req.body inside my array,so we simply need to push it
    //for that we use user.push(req.body)
}
*/

/*
//for using this schema we need to import it,for importing it we can simply use import statement
import {User} from '../model/users.js'

//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.
export const getUsers=(req,res)=>
{
    console.log("In function call getUser().. I this /users endpoint got hit.")
    //res.send(users) //after creating model comment this out

    User.find() //to get detail from database there is one function,it will try to find all the record for user,whatever record you got can you simply send it to the response
    .then //until now we were simply getting response from user array,but instead of this we must get respone from database
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}    

export const createUser=(req,res)=>        //createUser is used for creating new user
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    //res.send("ok")
    //user.push(req.body) //after creating model comment this out

    //we need to create object out of model and storing it for that i need to create it first
    //we must create model out of it 

    const user=new User //this Uaer is from model
    (
        {
            name:req.body.name,
            gender:req.body.gender,
            age:req.body.age,
            city:req.body.city,
        }
    )

user.save()//save() makes sure that data is stored inside the database
    .then                            //if code is successful or no error then .then method is used             
    (
        (result)=>                   
        {
            res.send(result)
        }
    )
    .catch          //if code is not successful or there is error then .catch method is used
    (
        (err)=>
        {
            console.log(err)

        }
    )
    
}

export const getUserById=(req,res)=>
{
    console.log("In function call getUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findById(req.params.id) 
    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}
*/

//10 April 

/*
//for using this schema we need to import it,for importing it we can simply use import statement
import {User} from '../model/users.js'

//in controllers we define functions

let users=[]//this will act as a user table(database)..later will replace this with DB call

//we use export const so that it can be used on another files/folder.

//query
//earlier we fetch or get record by id but now we will fetch record by name and age(using two attributes only and for that query is used) 
//params is the parameter which you passed to the url //http://localhost:7777/user and query works on the same url
////http://localhost:7777/user it contains bunch of JSON data and query is simply trying to work on bunch of JSON data
//so if query work on it,we will get filtered data,here ? and & are fixed keyword
//if we use query for the url then function is not changed and same function will be used 
////http://localhost:7777/user?name=gaurav&age=22 getUser function is used(no different function are used)
//if we use param you will require different function to solve the url 
//http://localhost:7777/user/id getUserById function is used(also many different function are used)

//fetch record by name,gender,age and city
//http://localhost:7777/user?name=gaurav&gender=male&age=22&city=Mumbai
//you will get desire output on webpage or postman
export const getUsers=(req,res)=>
{
    console.log("Hi")
    console.log(req.query)
    console.log("In function call getUser().. I this /users endpoint got hit.")
    //res.send(users) //after creating model comment this out

    User.find() 
    .then 
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}    
//output:-//here req.query will give filtered output from given data inside terminal
//use http://localhost:7777/user?name=gaurav&age=22 on webpage and you will get filtered data on terminal
//Hi
//{ name: 'gaurav', age: '22' }
//In function call getUser().. I this /users endpoint got hit.

export const createUser=(req,res)=>        //createUser is used for creating new user
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    //res.send("ok")
    //user.push(req.body) //after creating model comment this out

    //we need to create object out of model and storing it for that i need to create it first
    //we must create model out of it 

    const user=new User //this Uaer is from model
    (
        {
            name:req.body.name,
            gender:req.body.gender,
            age:req.body.age,
            city:req.body.city,
        }
    )

user.save()//save() makes sure that data is stored inside the database
    .then                            //if code is successful or no error then .then method is used             
    (
        (result)=>                   
        {
            res.send(result)
        }
    )
    .catch          //if code is not successful or there is error then .catch method is used
    (
        (err)=>
        {
            console.log(err)

        }
    )
    
}

export const getUserById=(req,res)=>
{
    console.log("In function call getUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findById(req.params.id) 
    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}


export const deleteUserById=(req,res)=>
{
    console.log("In function call deleteUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findByIdAndDelete(req.params.id) //for passing user id,req.param.id is used
    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}


export const updateUserById=(req,res)=> //patch is basically used to update a particular entry and update is use to update the entire entry
{
    console.log("In function call updateUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findByIdAndUpdate
    (req.params.id, 
    {name:req.body.name,
    gender:req.body.gender,
    age:req.body.age,
    city:req.body.city

    }) 
    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}
*/

//11 April

/*
//using aggregate function

//for using this schema we need to import it,for importing it we can simply use import statement
import {User} from '../model/users.js'

//in controllers we define functions

let users=[]

export const getUsers=(req,res)=>
{
    console.log("Hi")
    console.log(req.query) //for getting filtered data query is used
    if(req.query.age) //for passing user age as query,req.query.age is used
    {
        getUsersByAge(req,res)//add getUsersByAge API inside getUser API as aggregate function is used inside getUserByAge API
    }
    else
    {
        console.log("In function call getUser().. I this /users endpoint got hit.")
        User.find() 
        .then 
        (
            (result)=>
            {
                res.send(result)
            }
        )
        .catch
        (
            (err)=>
            {
                console.log(err)
    
            }
        ) 
    }
}    
//output:-//here req.query will give filtered output from given data inside terminal
//use http://localhost:7777/user?name=gaurav&age=22 on webpage and you will get filtered data on terminal
//Hi
//{ name: 'gaurav', age: '22' }
//In function call getUser().. I this /users endpoint got hit.

export const createUser=(req,res)=>        //createUser is used for creating new user
{
    console.log("In function call createUse() .. I this /users endpoint got hit.")
    //res.send("ok")
    //user.push(req.body) //after creating model comment this out

    //we need to create object out of model and storing it for that i need to create it first
    //we must create model out of it 

    const user=new User //this Uaer is from model
    (
        {
            name:req.body.name,
            gender:req.body.gender,
            age:req.body.age,
            city:req.body.city,
        }
    )

user.save()//save() makes sure that data is stored inside the database
    .then                            //if code is successful or no error then .then method is used             
    (
        (result)=>                   
        {
            res.send(result)
        }
    )
    .catch          //if code is not successful or there is error then .catch method is used
    (
        (err)=>
        {
            console.log(err)

        }
    )
    
}

export const getUserById=(req,res)=>
{
    console.log("In function call getUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findById(req.params.id) 
    //User.findById returns promise because (req.param.id) function is executed asnynchronously
    //by behaviour of promise it is fixed that it has two function .then() and .catch()
    //so in future if promise has response or result then .then() function is executed
    //if promise has error then .catch() function is executed
    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}


export const deleteUserById=(req,res)=>
{
    console.log("In function call deleteUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findByIdAndDelete(req.params.id) //for passing user id,req.param.id is used
    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}


export const updateUserById=(req,res)=> //patch is basically used to update a particular entry and update is use to update the entire entry
{
    console.log("In function call updateUserById.. I this /users endpoint got hit.")
    //res.send(users)
    User.findByIdAndUpdate
    (req.params.id, 
    {name:req.body.name,
    gender:req.body.gender,
    age:req.body.age,
    city:req.body.city

    }) 
    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}

//aggregate function:-
    //aggregate is used to get particular data of users from the database based on the given key:value
    //for e.g:-to get users of age 50 from database,we use aggregate function using http://localhost:7777/user?age=50 on postman   
    //syntax for aggregate:-functionname.aggregate[{$(opearion:{key:value})}]
//firstly  create getUsersByAge API without using PORT and then add it inside getUser API
const getUsersByAge=(req,res)=>
{
    console.log("In function call getUserByAge().. I this /users endpoint got hit.")
    User.aggregate                
    //aggregate is used to get particular users from the database based on the given value
    //for e.g:-to get users of age 50 from database,we use aggregate function    
    //syntax for aggregate:-functionname.aggregate[{$(opearion:{key:value})}]
    (
        [{$match:{"age":"50"}}] //it will filter out users whose age is 50
    )

    .then
    (
        (result)=>
        {
            res.send(result)
        }
    )
    .catch
    (
        (err)=>
        {
            console.log(err)

        }
    )
}    
*/