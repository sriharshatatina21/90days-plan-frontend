//Arrays and operations.
//Array
// --> array is a collection of elements.
// let arr = [1,2,3,4,5];
// console.log(Array.isArray(arr));
// let arr1 = [true,false,!false,!!false];
// console.log(arr1);
let arr1 = [1,2,3,4,5];
// console.log(arr1);

// unshift --> add element beginning of array.
// arr1.unshift(0);
// console.log(arr1);

//push --> add element at the end of array.
// arr1.push(6);
// console.log(arr1);

//pop --> Remove the last end element of an array.
// arr1.pop();
// console.log(arr1);

//shift --> Remove the first element in the array.
// arr1.shift();
// console.log(arr1);

//lenght --> To find the lenght of an array.
// console.log(arr1.length);

//slice --> Here it is used for cut the peice of array out,it is used through index value startFrom-0,the end element want means we should give next value to it,here 1,3 means 1,2 only.
// console.log(arr1.slice(1,3));

//splice --> it cut the array and modify main array means 1,3 means cut the elements and give the remaining elements,in this upper number is also involved.1,3 means 1,2,3
// console.log(arr1.splice(1,3));

//indexOf --> To find the index value of an element,if not presented element is entered means it will give -1
// console.log(arr1.indexOf(2));

//join --> it is used to make array element into a string with the help of an specific separater or any element in our keyboard.
// console.log(arr1.join(","));

// forEach --> it is a function shorthand method for array operation
// arr1.forEach(value=>{
//     console.log(value);
// })

//reduce --> here it is used add the total array and return it.
// let result = arr1.reduce((acc,val)=>{
    // return acc+val;
// })
// console.log(result);

