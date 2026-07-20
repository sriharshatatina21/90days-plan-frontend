// A function is a block of code that can use many time when we want.
//name_function function deep(){ //function_declaration functionName functionParanthis functionOpenandClose
  //  console.log("asshole");
//};
//deep();// functionCall with name

//UnonimusFunction -- a function with no name but assign to a variable and should call like function with that name only not like variable call.  
// let greet = function(){
//     console.log("sai");
// }
// greet();

//ArrowFunction --> it is for shorthand form of an function,it is a feature of ES6
// let name = ()=>{
//     console.log("Saas");
// };
// name();

//let,var --> here if we use let means it is in BlockScope,if we use var means it is in GlobalScope

//namedFunction(This function goes to globalScope and here it will hosted ) vs unoinmusFunction(This function will goes to Script Scope in the execution time it will go to localScope it self also this operation can do means window operations can done.) vs arrowFunction(This function will goes to Script Scope in the execution time it will go to localScope it self also this operation can't do means window operations can't be done,and it store like string complete function is a string.)

//Hosting --> it means in js we can declare a funciton or variable and we can call it anywhere in code up's and down's we can call,it work in only GlobalScope
// Here scriptScoped,localScoped varibale or function can't be hosted.
//localScope variables will allocate memory memmory usage is not done.
//here in localScoped variables hosted before intilization means it through undefeind beasuce it says it is ready to use but it is not defiend.

//what is temporerlyDeadzone in js?
// --> here all the localscoped variable will not be Hosted so the predeclared varibale will be move refernceError then this condition is called temporery dead zone.

//functionwithParameter --> it means we should pass values into peranthes
// function add(a,b){
//     return a+b;
// }
// console.log(add(2,3));

//IAFE --> immediate function envoke
// (function(){
//     console.log("Started"); 
// })(); --> we are calling immdeatly

// call --> here it use for to change (this) refered values we use call,when it was in blockScope,also we can pass a parameter.(this is for function in object)
//greet.person.call({variablename:"value"},"name");

//apply --> same work as call but we can pass muiltple value in it.
//greet.person.call({variablename:"value"},["name","Age"]);

//bind --> here it is used for same as apply and call but it will not directly call or exectue we need to call but we can also reuse it.
//var superbind = /greet.person.call({variablename:"value"},"name");
// superbind();

// higherOrderFunction --> pass a function as parameter to another function it is called higher order function.
// function operations(a,b,func){
//     return func(a,b)
// }
// function add(a,b){
//  return a+b;
// } 
// function SUB(){
//  return a-b;
// }

//recursiveFunction --> call funciton itself.
// function add(a,b){
//     return a+b-add();
// }
// let addition = add(10,20);
// console.log(addition);

// function a(a,b){
//    return function b(){
//         return function c(){
//             return function d(){
//                 return function e(){
//                     return function f(){
//                         return a+b;
//                     }
//                 }
//             }
//         }
//     }
// }
// let reuslt = a(1,2)(3)(4)(5)(6)(7)
// console.log(reuslt);
