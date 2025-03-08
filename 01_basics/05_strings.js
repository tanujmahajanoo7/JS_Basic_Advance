const name = "tanuj"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('tanuj-tc-com')

// console.log(gameName[0]);

// console.log(gameName.__proto__);               // {}
// console.log(gameName.length);                  // {}
// console.log(gameName.toUpperCase());           // tanuj-HC-COM
// console.log(gameName.charAt(2));               // t
// console.log(gameName.indexOf('t'));            // 2
// console.log(gameName.split('-'));              // [ 'tanuj', 'hc', 'com' ]

const newString = gameName.substring(0, 4)
// console.log(newString);                            // hite

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "   tanuj    "
// console.log(newStringOne);
// console.log(newStringOne.trim());            // For removing spaces

const url = "https://tanuj.com/tanuj%20mahajan"

// console.log(url.replace('%20', '-'));

// console.log(url.includes('sundar'));