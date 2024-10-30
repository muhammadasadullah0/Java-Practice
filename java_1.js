let score = "true" // let is consider a multiple times 

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number (score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1; flase => 0


let isLoggedIn = "asad" 

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// 1 => true : 0 => false 
// "" => false 
// "asad" => false 

let someNumber = 33 ;

let stringNumber = String(someNumber)

// console.log(typeof stringNumber);

// let a = "ASADULLAH";
// let b = Number (a)
// console.log(typeof b);


// 0

// let ab = .3
// let ax = Boolean (ab)

// console.log(ax);



// const isLOGGEDINTHREETIMES = "ASADULLAH SIDDIQUI"
// const isLOGGEDINTWOTIMES = Boolean (isLOGGEDINTHREETIMES)

// console.log(isLOGGEDINTWOTIMES);


let myChannelName = "ASADULLAH"
let anothername = myChannelName
anothername = "Chai WITH ME @@@"

console.log(anothername);
console.log(myChannelName);


let userOne = {
    email : "user@abc.com",
    upi : "user@abc.com"
}

let userTwo = userOne

userTwo.email = "abc@jit.com"

console.log(userOne.email);
console.log(userTwo.email);
