//object is a combination of more than one property.it is a key value pair where we can create n-no object and we can add array.
//JSON --> javascript Object Notation,it is a object that contains more key value pairs.
// let mobile = {
//     productId: 1,
//     name: "iphone",
//     model: "17pro",
//     coast: "1,23,000",
//     rating: 4,
//     ratingType: "⭐",
//     priceType: "INR",

//     varient: [
//         {
//             varientColor: "red",
//             varientPriceDiffernce: "2500",
//         },
//         {
//             varientColor: "green",
//             varientPriceDiffernce: "1000",
//         },
//         {
//             varientColor: "black",
//             varientPriceDiffernce: "2000",
//         }
//     ],

//     configuration: [
//         {
//             configurationModel: "17pro",
//             storage: "128GB",
//             rom: "8GB"
//         },
//         {
//             configurationModel: "17pro",
//             storage: "64GB",
//             rom: "8GB"
//         },
//         {
//             configurationModel: "17pro",
//             storage: "128GB",
//             rom: "4GB"
//         }
//     ],

//     review: [
//         {
//             reviewerId: 1,
//             reviewerEmail: "sia213@gmail.com",
//             reviewerMobile: 8465763934,
//             acutalReview: `Good product but not that much good`
//         },
//         {
//             reviewerId: 2,
//             reviewerEmail: "trichi23@gmail.com",
//             reviewerMobile: null,
//             acutalReview: `Good product but not that much good`
//         },
//         {
//             reviewerId: 3,
//             reviewerEmail: null,
//             reviewerMobile: 8465763934,
//             acutalReview: `Good product but not that much good`
//         }
//     ],

//     specifications: [
//         {
//             display: "6.9 inch OLED",
//             processor: "A19 Bionic",
//             battery: "5000mAh"
//         },
//         {
//             camera: "48MP + 12MP + 12MP",
//             frontCamera: "24MP",
//             operatingSystem: "iOS 20"
//         }
//     ],

//     sellerDetails: [
//         {
//             sellerId: 101,
//             sellerName: "Apple Store",
//             location: "Bangalore"
//         },
//         {
//             sellerId: 102,
//             sellerName: "Mobile World",
//             location: "Hyderabad"
//         }
//     ],

//     offers: [
//         {
//             offerId: 1,
//             offerName: "Bank Discount",
//             discount: "10%"
//         },
//         {
//             offerId: 2,
//             offerName: "Exchange Offer",
//             discount: "15000 INR"
//         }
//     ],

//     accessories: [
//         {
//             accessoryId: 1,
//             accessoryName: "Wireless Charger",
//             price: "3999"
//         },
//         {
//             accessoryId: 2,
//             accessoryName: "AirPods Pro",
//             price: "24999"
//         }
//     ]
// };
//hasOwnProperty --> it is used for to check whether the object has certain property or not to check it is useful,for this if-statements are very useful.
// if (mobile.hasOwnProperty("accessories")) {
//     console.log("yes we had");
//     console.table(mobile.accessories)
    
// }
//what is Shallow_copy ? --> means share the same memory location means if any chnages made in dummy object the orginal obj will also changes,share same memory location.
// let copiedProperty = mobile;
// structuredClone() --> it is used to copy the original and make it a new memory allocation,it is used for deepcopy.
// let deepCopyObj = structuredClone(mobile);
// deepCopyObj.coast = 430000;
// console.log(mobile);
// console.log(copiedProperty);

// let person = {
//     name:"harsha",
//     qualificaiton:"mca",
//     age:23,
//     address:"unguturu"
// };
// Object.freeze(objName) --> we can modify and reuse the code but we can't delete the properties of object.
//Object.seal() --> we can not add new properites but we can use present properities only. 
//isFrozen() --> it is for to check whether the object is freeze or not.
//isSealed() --> it is for to check whether it is sealed or not.
// if (!Object.isFrozen(person)) {
// if (!Object.isSealed(person)) {
//     console.log("it is freeze");
// }
// Object.freeze(person)
// person.age = 21;
// person.class = "mca";
// // delete person.age;
// console.log(person);
//Object.assign() --> used to add one object to another object,here in this deep copy will work for normal properities nested properities will not work it make shallow copy. 
// let person2 = Object.assign({},person);
// person2.name="sai";
// console.log(person2);
//JSON.stringif() --> to change any object to JSON format.
// let person = {
//     name:"harsha",
//     qualificaiton:"mca",
//     age:23,
//     address:"unguturu"
// };
// let jsonPerson = JSON.stringify(person);
// console.log(jsonPerson);
//JSON.perse() --> here it is used to change Json formatted object to normal object
// let person = `{
//     "id": 1,
//     "name": "Harsha",
//     "age": 22
// }`;

// console.log(person);
// let persePerson = JSON.parse(person);
// console.log(persePerson);
//{...anyName} --> spreadOperator it is used for to add variables to a single varible means for futher use,here an object should copy to another object we use this.
// let person = {
//     name:"sai",
//     age:23,
//     college:"Dnr",
//     class:"mca"
// };

// let person1 = {...person};
// console.log(person1);
//for.in.loop --> it is used for to iterate the object and get out.
// let person = {
//     name:"sai",
//     age:23,
//     college:"Dnr",
//     class:"mca"
// };
// for (const key in person) {
//     // console.log(key+":"+person[key]);
//     console.log(key);
//     console.log(person[key]);
// };
//Object.keys() --> it is used to get key-values from object.
// let person = {
//     name:"sai",
//     age:23,
//     college:"Dnr",
//     class:"mca"
// };
// let header = Object.keys(person);
// console.log(header);
// Array.forEach() --> it is used for we can write the whole js-code in this.we can add to any object (obj.forEach(anyJsCode)) 
//entries --> it is to get both key and value 
//To get nested object out we do JSON.stringif()
// let person = {
    // name:"sai",
    // age:23,
    // college:"Dnr",
    // class:"mca"
// };
// let entries = Object.entries(person);
// console.log(entries);
//Object.value() --> to get values out.
// let person = {
//     name:"sai",
//     age:23,
//     college:"Dnr",
//     class:"mca"
// };
// let entries = Object.values(person);
// console.log(entries);
//navigator.onLine --> it says the user online or not.
//navigator.userAgent --> it says the which we are in chorme
//navigator.getBattery() --> it says how is batter