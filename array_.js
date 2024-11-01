/* =========== array ============ 

const myArr = [0, 1, 2, 3, 4, 5]
const myHero = ["Iron Man" , 'Dr.Strange', 'Spider-Man']
const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[0]); // this is the way to check the value of an array
console.log(myArr2[0]); // this is the way to check the value of an array
console.log(myHero[0,1,2]); // this is the way to check the value of an array

*/

/* ========= Array Methods ========== 
const myArr = [0, 1, 2, 3, 4, 5]

myArr.push(6)
myArr.push(7)
myArr.pop()

myArr.unshift(9)
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));


const newArr = myArr.join()
console.log(myArr);
console.log(typeof newArr);

===== Differentiate between "SPLICE" & "SLICE" =====

console.log("A" ,myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);


console.log("B" ,myArr);
console.log(myn1);

const myn2 = myArr.splice(1,3)
console.log("C" ,myArr);
console.log(myn2);

*/

/*
In this Section we merge/combine the array by 6 methods!


const marvel_heroes = ["thor",'spiderman','Dr.strange']
const dc_heroes = ["flash",'batman','superman']

// In this 1st method is combibne array but it shows a incoorect way to merge it it use this (PUSH)!method So can't use this..  
marvel_heroes.push(dc_heroes)  
console.log(marvel_heroes);

// In this 2nd combines two or more arrays with returns a new array and it also add one array in it with (CONCAT)! method!
const allheros =  marvel_heroes.concat(dc_heroes)  
console.log(allheros);


// We have 3rd and easy method who's name is spread opertaors who denotes a multiple arrays with returns a new array ((...)=>SPREAD OPERATOR!!!).EXAMPLE:=(Let's supposed i have a glass and i drop this on a floor so glass are broken and it's spread with tiny particles !) 100 + arrays stored with this spread method!
const all_new_heros = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heros);


// This is the 4th method it is also use while your multiples arrays are stored in one array. So how can show this all value in a single array so, we have a method there is (FLAT!) 
const another_array = [1, 2, 3, [1, 2, 3], 7, [4, 5, 6,], 10]
const real_new_array = another_array.flat(Infinity)
console.log(real_new_array);


// In this 5th method we make an array by any value that i written in this code with (FROM)! method
console.log(Array.from("Asadullah"))

//In this 6th method we give a simple value in a let/var but we want this all three values are shown in an array format so let's do it with a (OF!) method!
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2, score3));


*/