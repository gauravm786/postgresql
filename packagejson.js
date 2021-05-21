//9 May

//understanding package.json

//copied package.json from onlygaurav>javascriptpractice>library>package.json


//in npm we have pakage.json file
//in scripts key we add multiple commands

//to use npm and to do git push 
//whatever command we use we need to insert into scripts key
//to start application we use node filename
//if we dont want to use node and we are in development phase we can use nodemon index.js 
//and now we can go on command line and type npm run start to run start key in scripts
//if we change start to devstart in scripts and use npm run start,it will show error
//so we should use npm run devstart instead of npm run start
//if we use npm run test and actual command which  will execute will be  git push 
//similarly if we use npm run start then it will execute nodemon index.js and for devstart nodemon indexs.js will be exexcuted
//if we run key then value will be executed
//we can use both npm run start and npm start to execute the command
//to handle postgresql we need sequelize,this sequelize is nothing but ORM,ORM is nothing but object relatioal mapping which helps to map object to relation and this relation is further stored into the database
//pg will maintain connection with database and sequelize will provide the ORM  and pg-hstore will be the mediator between sequelize and pg
//use of dependencies key in package.json:-dependencies key contain all the dependencies for our application
//for running our application we require node_modules
//if we delete node_modules folder and use npm start our application will not work  because dependencies is not present inside node_modules
//npm i makes sure that all required dependencies is there available into the  system
//in new system if we want to execute the application we use npm i
/*
{
    "name": "library",
    "version": "1.0.0",
    "main": "index.js",
    "scripts": {
      "test": "git push",
      "start": "nodemon index.js"
      "devstart":"nodemon indexs.js"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "description": "",
    "dependencies": {
      "express": "^4.17.1",
      "g": "^2.0.1",
      "mongoose": "^5.12.7",
      "nodemon": "^2.0.7"
    },
    "type": "module"
  }
*/  

//to install pg sequelize and pg-hstore use
//npm install pg sequelize pg-hstore
