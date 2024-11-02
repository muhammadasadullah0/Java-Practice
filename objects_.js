// Objects : In object we give a data in a (key or value). There are three methods in objects declaratioin:
// 1.Literal
// 2.Constructor
// 3.Singleton => Object.create(singleton)

// Object Literals //

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

// console.log(JsUser.email); // 1st way to access the objects
// console.log(JsUser["full name"]); // 2nd way to access the objects
// console.log(JsUser[mySym]); // we access a symbol by this way!

JsUser.email = "asad@facebook.com" // we replace the value of key by this way!
// console.log(JsUser.email);

// Object.freeze(JsUser) // In this method we locked our object and can't change all the keys!
JsUser.email = "asad@microsoft.com" 
// console.log(JsUser);


JsUser.greeting = function () {
    console.log("Hello Js Users");
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function () {
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greetingTwo());

