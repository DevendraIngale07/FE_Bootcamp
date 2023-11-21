// // console.log("String.js in connected0");
// //  let string = "This is sentence mulliipale string"
 

// //  let sentence1 = "this is sentence 1"
// //  let sentence2 = "this is sentence 2"

// //  console.log(sentence1 + " " + sentence2);

// //  let fullName = "Devendra Ingale"
// //  console.log(fullName.toUpperCase());
// //  console.log(fullName.toLowerCase());
// //  console.log(fullName.trim())

// // console.log("This is this : ", this);

// // function test(){
// //     console.log(this);
// // }
// // this.test()
// // test()

// // var testing = {test:"This is testing object"}

// // var arrowTesting = () =>{
// //     console.log('This is arrow testing func');
// // }

// // var name = "pratham"

// // // local context
// // let bio = {
// //     name:"pratham",
// //     age:23,
// //     meArrow:()=>{
// //         console.log(`My name is ${this.name} and I'm ${this.age} years old`);
// //     },
// //     meNormal:function(){
// //         console.log(`My name is ${this.name} and I'm ${this.age} years old`);
// //     }

// // }
// // bio.me()







// console.log("Date.js file is connected")

// let date = new Date()
// // To get current date obj
// console.log(date);

// // date, month, hours, seconds... ETC
// date.getHours()
// date.getDate()
// date.getDay()
// date.getFullYear()
// date.getSeconds()
// date.getMinutes()

// // How to add  1 day extra into cuurent datetime
// const miiliPerDay = 1000 * 60 * 60 * 24
// const dateOfDayAfterToday = new Date(date.setTime(date.getTime() + (miiliPerDay)))



// // console.log("TypeConversion file is connected..");

// // // Type conversion from Int to String-------------------
// // // let age = 12;
// // // console.log(age+"");
// // // console.log(age.toString());

// // // Type conversion from String to Int-------------------
// // // let phoneNo = "9090909090.0002435"
// // // console.log(parseInt(phoneNo))
// // // console.log(+phoneNo)
// // // console.log(Number(phoneNo))

// // // Type conversion from String to Boolean -------------------
// // // let isValid = "true"
//  console.log(Boolean(isValid))



// Formatted date (date-month-year)
date = new Date()
// "20 Nov 2023"
let tarik = date.getDate();
let day = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday ","Sunday "];

let forMattedDate = `${tarik} ${days[day]}${months[month]} ${year}`
forMattedDate;
console.log(forMattedDate);
// Formatted date (day-date-month-year)