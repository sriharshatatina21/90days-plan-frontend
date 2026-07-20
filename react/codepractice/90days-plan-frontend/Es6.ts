// let age:number=23;
// const mobile:number=9032906692;
// console.log(age);
// console.log(mobile);

// /*
//     Arrow Function
// */

// function add(a:number,b:number):number|void{
//     return a+b;
// }

// console.log(add(23,32));

// /*
//     Arrow Function - it is a short hand function that used to perform array operation.
// */

// let add1 = (a:number,b:number):number=>{ // -> muilti-lined arrow function,it will not host it will move has a string in console.log
//     return a+b;
// }
// console.log(add1(20,20 ));

// let add2 = (a:number,b:number) => console.log(a+b); // single-lined arrow function.
// /* filter -> it is used for to modify or seprate the elements and filter is the higher oreder function and filter takes another function as input the function in filter than it is called predicate function.*/

// let marks =[17,27,90,71,28];
// let marks1 = marks.filter((x:number)=>x%2==0);
// console.log(marks1);

// // also we can send another fucntion into input

/* 
REST operators
Spreed operators
*/

// let person ={
//     name:"sai", 
//     age:23,
//     mobile:"7670945114"
// };

// let person2 = {
//     ...person, // spread operator
// };
// console.log(person2);

// person2.age=21;
// person2.mobile="9042342429";

// console.log(person2);

// var {name,age} = person2; // destructuring
// console.log(name);
// console.log(age);

/* Rest Operator  - used to passing n-no of variable*/

// let arr1 = [10,20,30,40];
// const arr2 = arr1.forEach(x=>{}) // -> forEach is a function same as filter

// let student:{
//     name:string;
//     age:number;
// } ={
//     name:"Sai",
//     age : 23
// }
// console.log(student);

export function add(a:number,b:number):number{
    return a+b;
}
console.log(add(39,30));
