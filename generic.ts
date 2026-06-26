// Generics is a functionality.
// Declaring data type to the letter or a word simply like variable declaring.
// Generally decalring them in <>.
// Also we can change its datatype.
// class student<t,a,o>{
//     age?:t;
//     name?:a;
//     address?:o;
// }
// var om = new student<number,string,any[]>();
// om.age=23;
// om.name="sai"
// om.address=[10,20,"sai"]
// console.log(`my age is ${om.age} name is ${om.name} my address${om.address}`);


// interface student<S,N>{
    // name:S;
    // age:N;
// }
// var obj:student<string,number>={
    // name:"sai",
    // age:23
// }
// console.log(obj);

// In class we no need to define function keyword but normally we can declare it.
// if it is in class it is a method

// function add<N extends number>(a:N,b:N):number {
//     return a+b;
// }
// var a = add<number>(12,20)
// console.log(a);

// Constraints --> it means we are keeping a rule that this generic should be this type only so for that we should extend it <T extends number>

// (|) by this we can give muiltpile options and (?) this says that you can igonre it no need to declare it.