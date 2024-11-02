// Objects : In object we give a data in a (key or value). There are three methods in objects declaratioin:
// 1.Literal
// 2.Constructor
// 3.Singleton => Object.create(singleton)

// Object Literals //
/*
const mySym = Symbol("key1")
const JsUser = {
    //key : value 
      name: "Asad",
      [mySym]: "mykey1", //that our varible those we pass in upper line no : 9!
      "full name" : "Asadullah Siddiqui",// We access with console.log(JsUser["full name"]); 
      age: 18,
      location: "Karachi",
      email : "abc@gmail.com",
      isLoggedIn : false,
      lastLoginDays : ["Monday", "Sunday"]
} 

console.log(JsUser.email); // 1st way to access the objects
console.log(JsUser["full name"]); // 2nd way to access the objects
console.log(JsUser[mySym]); // we access a symbol by this way!

JsUser.email = "asad@facebook.com" // we replace the value of key by this way!
console.log(JsUser.email);

Object.freeze(JsUser) // In this method we locked our object and can't change all the keys!
JsUser.email = "asad@microsoft.com" 
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello Js Users");
}console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    console.log(`Hello Js User ${this.name}`);
}console.log(JsUser.greetingTwo());

*/



//OBJECTS SINGLETON WITH A CONSTRUCTOR //

/* 
const tinderUser = new Object() // Singleton Object
const tinderUser2 = {} // Non-Singleton Object

tinderUser2.id = "123abc"
tinderUser2.name = "Sammy"
tinderUser2.isLoggedIn = false

console.log(tinderUser2);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Asadullah",
            lastname: "Siddiqui",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4);

const users = [
    {
        id: 0,
        email: "asad@gmail.com",
    },
    {
        id:1,
        email: "jawaid@gmail.com",
    },
    {
        id: 2,
        email: "abdullah@gmail.com",
    },
]
console.log(Object.assign([users[2],{},email]))

console.log(tinderUser2);
console.log(Object.keys(tinderUser2));
console.log(Object.values(tinderUser2));
console.log(Object.entries(tinderUser2));
console.log(tinderUser2.hasOwnProperty('isLoggedIn'));

*/

// De-structring of Objects//
/*
const course = {
    coursenmae : "js by asad",
    price : 1000,
    courseInstructor : "Asad"
}

// cousre.courseInstructor // This is very offensive way now let's try new !
const {courseInstructor :instructor} = course
console.log(instructor);

*/