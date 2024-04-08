const name = "Mohit"
const repoCount = 50

// console.log(name +  repoCount + " Value"); not recomended

// console.log(`Hello my name is ${name} and I scorded ${repoCount} in maths`); //this is recomrnded

const gameName = new String('mohit-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   mohit   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mohit.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));