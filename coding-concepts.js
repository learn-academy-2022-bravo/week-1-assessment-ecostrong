// // ASSESSMENT 1: Coding Conceptual Questionsn
//
// // Examine the following examples.
//
// // First, predict the outcome based on your understanding of the code.
// // Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
//
// // --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//  console.log(colors.push("indigo"))
//
//  a) Your answer: Push will add a new element at the end. So this should add "indigo"
//  to the end of the index string. So I think it should result in
//  "tangerine", "magenta", "lilac", "daffodil", "indigo"
//
// b) Verify and explain: I was incorrect. The terminal returned 5. This is because
// this is an array, which is a collection of ordered data, called elements.
// The content of each element is called a value.
// So "tangerine" is a value in the array. Every value in an array
// has a location known as an index. Arrays are zero index, meaning it starts at zero
// so "tangerine= 0, mangenta=1, lilac=2 and so on advancing >>>.
// The length of the array is always the last index aka (position) plus one.
// So "indigo" would be at postion 4, plus 1, which gave the output of 5.
// "tangerine", "magenta", "lilac", "daffodil", "indigo" + 1
//    0             1         2         3          4       5 Length of the array
//
//   This modified the array data. Arrays are mutable and can be changed.


//
// // --------------------1) What will this log?
//
//const cohort = "LEARN 2022"
//console.log(cohort.length)
//
// // a) Your answer: 10

// // b) Verify and explain: Terminal output=10
 //This is a string and it has 10 individual characters.
// L E A R N   2 0 2 2
// 1 2 3 4 5 6 7 8 9 10
// //
// //
// // // --------------------2) What will this log?
// //
// const greeting = "Hello World!"
//  console.log(greeting[4])
// //
// // // a) Your answer: l
// // // b) Verify and explain: The terminal logged o. This is because it [] means
// this is an index and not the character "" in a string, so start a zero index.
// H  E  L L O
// 0  1  2 3 4
//
//
// // --------------------3) What will this log?
//
// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// //
// // // a) Your answer: Ruby
// // // b) Verify and explain: Terminal logged Ruby, because this is an array.
//  Arrays are identified by [], so this Array start at zero index, so Javascript=0, Ruby=1
// "JavaScript", "Ruby", "Python", "C++"]
//     0           1        2        3

//
//
// // --------------------4) What will this log?
//
//
// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase());


//
// // // a) Your answer: I believe this will make the strings UpperCase, "Saturday", "Sunday"
// // // b) Verify and explain: The terminal said toUppercase is not a function.
// toUppercase is for strings and returns the string with all lowercase letters converted to uppercase.
//This is because to use it as an Array it required an index inside of the Array like below.
//For example it made saturday uppercase to Saturday.
//
// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays[0].toUpperCase())
//
// output is "Saturday"

//const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays[1].toUpperCase())

//output is "Sunday"
//
//
// // --------------------5) What will this log?
//
// const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)
// //
// // // a) Your answer: the array values can not be changed or modified, or the order.
// So I believe it will give back "number", "string" "Boolean"
//
// // // b) Verify and explain: The output is "number" this is because typeof is a javascript variable that
//will return the string when called. It is used to check variable code.
//Length is the total number of elements which is contained in the array, which is "number" as it
// returned all elements in the array.
