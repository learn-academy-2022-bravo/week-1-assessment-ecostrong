ASSESSMENT 1: Coding Practical Questions

To run file: navigate to the correct directory in terminal, $ node code-challenges.js
Pseudo coding is required.

INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

Vocabulary Definitions:

o FUNCTION: is reusable pieces of code that only execute when invoked and always return an output.
const greeting = ()=> {
  return "Hello there learn student!"
}

o STRING: are a collection of characters wrapped in quotation marks.
Strings have a length property and each charater in the string can be accounted for by its placement called an index.
Strings are zero indexed, characters start from 0 and ...>>> move forward.
"Hello World"
"42"


o VARIABLE: are place holders for the values that are assigned just like in algebra.
  can be called anything

var anything
console.log(anything)

var anything = 2
console.log(anything)


o CONDITIONAL: use if/else allow you to use logical in code, and a flowchart like structure, like a decision tree.
can give true or false answers.
if (this thing is true) {
 console.log (do this)
} else {
 console.log(do this other thing)
 }

 Problem set breakdown:
o create a function
o function that takes in any two strings ("string1 ") ("string2")
o function returns string with more characters
o function uses the two sets of variables provided
o use conditional statement to compare length variables
o use length
o return length with more characters in it.

Set one:

Need to come back to this one confused..

const fruit ={fruit: "bigfruit",
const fruit1 = "apple"
const fruit2 = "banana"
const fruit3 = "cherry"
const fruit4 = "kiwi" }

const Fruit(fruit1, fruit2) => {
  if(fruit1.lenght > fruit2.lenght) }
  return fruit1
  {else if (string1<string2)}
  return string2
   } else {
    return "Opps try again"
  console.log(bigfruit(fruit1, fruit2))
  console.log(bigfruit(fruit3, fruit4))

  {else if (string1<string2)}
  return string2
} else {
  return "Opps try again"
  console.log(bigfruit(fruit1, fruit2))
  console.log(bigfruit(fruit3, fruit4))
}


--------------------1) Create a function that takes in any given number and determines if the number is below boiling point,
at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.
Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

Problem set breakdown:
o create a function that in any given numbers and determines temperature in degrees fahrenheit
o function must take a given number and determines if..
o  a number below boiling point
o  a number at boiling point
o  a number above boiling point  varible "
o variable  "42 is below boiling point"
o variable  "212 is at boiling point"
o variable "350 is above boiling point"
o  Boiling point is 212 degrees Farhenheit
o this function requires that 3 values be passed through it, will need to code a list,
parameters are called arguments.
if temp is less then 212 then "is below boiling point"
if temp is greater than 212 "is above boiling point"
if temp is equal to 212 "is at boiling point"

My Code:

const temp1 = 350
function getTemp(temp1) {
  if (temp1 > 212) {
    return "350 is greater than boiling point";
}
}
console.log(getTemp(temp1));

 const temp2 = 42
function getTemp(temp2) {
 if (temp2 < 212) {
return "42 is less than boiling point";
 }
 }
 console.log(getTemp(temp2));

const temp3= 212
 function getTemp(temp3) {
 if (temp3 == 212) {
return "212 is at boiling point";
}
}
console.log(getTemp(temp3));

Code Work!!!

Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

o There are two arrays
o combine array 1
o with array 2
o To make array 3 = (array 1 + array 2)
o Return the length of the array using the numbers provided.

const array1 = [3, 7, 0, 36, -9]
const array2 = [8, -7, 42, 9, 13]
const array3 = array1.concat(array2)

console.log(array3)
console.log(array3.length)

Results: Code Worked!
3,  7,  0, 36, -9, 8, -7, 42,  9, 13
]
10
 --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.
Expected output: "1202 ovarB"

o reverse the letters of a string "Bravo 2022"
o return array and join
o Result should be "1202 ovarB"
const string = "Bravo 2022"
const result = reverseString(string)
function reverseString(str) {
    const arrayStrings = str.split("")
    const reverseArray = arrayStrings.reverse()
    const joinArray = reverseArray.join("")
    return joinArray }

console.log(result)

Results:2202 ovarB
Code Worked!

------------------4) Create a statement that will evaluate whether each number in an array is even or odd.
 Use the test variable provided below.
Expected output: "odd" "even" "odd" "even" "odd" "even"

o create a statement to tell if the numbers in the array are even or odd
o even or odd
o even numbers 34, 10, 42
o odd numbers 13, 5, 27, 42
o even numbers can be divided by 2
o % is used with 2


const number = [13, 34, 5, 10, 27, 42]
check if the number is even
if (number % 2 == 0){
 console.log("even")
}
if (number % 2!==0)
if the numer is odd
 console.log("odd")

Result=odd

const myArray = [13, 34, 5, 10, 27, 42]
let filtered = arr.filter((a,i)=>i%2===1)
console.log(filtered) 

Results=34,10,42
gave back even numbers


const myArray = [13, 34, 5, 10, 27, 42]
   const isEven = x => {
    	If the remainder after dividing by two is 0, return even
    	if (x % 2 === 0) {
    		console.log(("even"))
    	}
    	If the number is odd, return odd
      if (x % 2!==0)
    	console.log(("odd"))
    }

    Test the number
    isEven(13)
    isEven(34)
    isEven(5)
    isEven(10)
    isEven(27)
    isEven(42)

Result:
    odd
    even
    odd
    even
    odd
    even


// --------------------5) Create a function that takes in a set of any two numbers and subtracts
the smaller number from the larger number using the sets of test variables provided below.
Expected output: 42, 3

o function takes in set of any two numbers and substracts
o substract smaller number from larger number using the sets of variable


Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

Subtract x from y and assign the difference to z
let number5 = number2 - number1
console.log(number5)
let number6 = number3 - number4
console.log(number6)
