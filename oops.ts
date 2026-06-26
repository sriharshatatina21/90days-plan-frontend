// // ts have oops baased concepts.
// // class is a blueprint with variables and functions

// class student{
//     name:string='';
//     age:number=0;
//     marks:number[]=[10,20,30];
    
//     // constructor(name:string,age:number){ //parameterized constructor.
//     //     this.age= age;
//     //     this.name = name;
//     // }

//     constructor(s:student){ //-> copy constuctor 
//         this.age=s.age;
//         this.name=s.name;
//     }
//     calculateMarks():number{
//             let totalMarks = 0
//         this.marks.forEach((x:number) => {
//             totalMarks+=x;
//         });
//         return totalMarks;
//     }
//         greetStudent():void{
//             console.log(`Hello Good Morning${this.name} Your are ${this.age}`);
            
//         }
// }
 
// // var s = new student(); //-> here we are defining a constructor for an student object.
// // var s = new student('sai',20) //--> arguments
// // console.log(s);

// // Encapsulation --> protecting the private data and showing limited public data.

// // private -> protected -> public 

// // extends means a class will move to another class.

// //super --> here super is used for call the parent main class to extended class.

// //abstarct --> when we want not to implementing method called as abstract.
// //abstract method should complasary want abstract class
 
// abstract class student {
//     private name:string="sai";
//     protected age:number=23;
//     public marks:number[]=[10,20];
    
//     abstract greetStudent():number

// }