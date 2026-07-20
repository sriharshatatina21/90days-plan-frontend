//GARBAGE_COLLECTION 
// it means when any programing language completes its execution it will delete the memory it is called garbage collection.
//all objects are in heap memory,HeapMemory means the elements will life until the total code executed.
// All of the remaining js code is in Stack memory,StackMemory means it will delete after it excution immdeatly.
// Stack == LocalMemory.

//AscynchoriesFunction --> it is used for to say a certain code to keep it in waiting state for execution for this mainly used (setTimeout(()=>{},timeForwait))
// let person = {
//     name:"devi",
//     age:20
// };
// // debugger;
// console.log("Start"); // this will be in call stack.

// setTimeout(() => {
//     console.log(person); // this is will in microTaskqueue 
// }, 4000); --> here setTimeout takes two perameters one parameter as function.

// console.log("End"); // this will be in call stack

// clearInterval() --> used for to stop the setTimeout.

// Micro Task Queue --> this make the code wait and execute after call stack is empty.

// Event Loops --> the hole proces of ascynchornes is monitor by event loop.

//addEventlistner --> it is used for to run function along with document.

//promises --> it is used as same as setTimeout  but it says i will confirly execute,most property than setTimeout 

// Promise.resolve(()=>{}) to run this is syntax.

let name = ()=>{
    console.log("DSA");
}
name();
