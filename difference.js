//difference between named export and default export

/*
What is export default in JavaScript ?
Difficulty Level : Expert
Last Updated : 22 May, 2020
The export statement is used when creating JavaScript modules to export objects, functions, variables from the module so they can be used by other programs with the help of the import statements.
There are two types of exports. One is Named Exports and other is Default Exports.

Named Exports: Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.

// Exporting individual features
export var name1 = …, name2 = …, …, nameN; // also let, const
  
// Export list
export { name1, name2, …, nameN };
  
//Exporting everything at once
export { object, number, x, y, boolean, string }
  
// Renaming exports
export { variable1 as name1, variable2 as name2, …, nameN };
  
// export features declared earlier
export { myFunction, myVariable }; 
Example:

//file math.js
function square(x) {
  return x * x;
}
function cube(x) {
  return x * x;
}
export { square, cube };
  
   
//while importing square function in test.js
import { square, cube } from './math;
console.log(square(8)) //64
console.log(cube(8)) //512
Output:

64
512
Default Exports: Default exports are useful to export only a single object, function, variable. During the import, we can use any name to import.

// file module.js
var x=4; 
export default x;
  
// test.js
// while importing x in test.js
import y from './module'; 
// note that y is used import x instead of 
// import x, because x was default export
console.log(y);        
// output will be 4
Output



4
Another example of Default Exports with function

// file math.js
export default function square(x) {
  return x * x;
}
  
//while importing square function in test.js
import square from './math;
console.log(square(8)) //64
Output:

64
Using Named and Default Exports at the same time: It is possible to use Named and Default exports in the same file. It means both will be imported in the same file.

Example:

//module.js
var x=2;
const y=4;
function fun() {
   return "This a default export."
}
function square(x) {
  return x * x;
}
export { fun as default, x, y, square };
While importing this module.js we can use any name for fun because it is a default export and curly braces for other named exports.

//test.js file
import anyname, { x, y, square} from './module.js';
console.log(anyname()); //This is a default export.
console.log(x); //2
Output

This is a default export.
2
*/