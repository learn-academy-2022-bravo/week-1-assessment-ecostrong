# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

  Your answer:

  Researched answer:



1. What is git? What is the difference between git and Github?

Your answer: Git is software used by web developers that can track file updates from multiple users.
Github is an online user platform, that uses Git software, and is a powerful platform used by web developers to track and manage projects. Users create a profile and can create project repositories on the cloud server. Github allows for multiple users from around the world to work on multiple projects at the same time on different branches and update those branches for projects.

Researched Answer:
Git software was created by Linus Torvalds in 2005 for the Linux kernel.
It is software that tracks changes in any set of files and is used for collaboration by web developers for developing source code.
It helps with data integrity and speed. Git is a version control system that can be interacted from the command line in your terminal. Git can support workflows on parallel branches on different systems.
GitHub is an online project repository hosting service that allows a team to work together on projects on the same codebase. Teams can pull a local version of the repository on GitHub. Once the code is committed, it can be pushed back up to the repository and add it to GitHub.



2. Which JavaScript operators will return a Boolean value?

  Your answer: In JavaScript booleans return true or false values. Such as yes, or no.


Researched answer:
JavaScript uses two operators && And or || which are used for logical AND and OR operations.
The && And operator only returns true when both of its operators are true.
While the // Or operands only returns false when both operands are false, and true in all other cases.
are false. Both are logical short circuit operators that return a logical value when evaluated from left
In the expression x || y, x is evaluated first and is interpreted as a boolean value.
It does not matter if y is true of false, because y is not evaluated, x is as true.
The || operator return the first truthy value.

The && operation return the first falsy value.

&& stops evaluating if the first value in the argument is false.

For example using the Booleen values true and false can generate truth table.

Logical AND operations
true && true= true
true && false= false
false && true= false

To declare a Booleen Variable and assign value
var isValid=false;  // Boolean value is false

3. What is an index? What is the difference between index and value?

  Your answer:  In a array the index starts at 0.
  So it would be 0, then 1, 2, 3 and so on. The value is anything contained in an array and it
  can be assigned an index.

  Researched answer:
  Array elements are sequence by Index values, which always start at 0. Elements can accessed by there index
  using the array name.

  index will be -1 which means the item was not found

  Source:Code Academy
  / Accessing an array element
  const myArray = [100, 200, 300];

  console.log(myArray[0]); // 100
  console.log(myArray[1]); // 200
  console.log(myArray[2]); // 300

A value in JavaScript is a chuck of bits. If you picture a computer as an ocean of bits,
a computer would have 30 billion in data storage working memory.
So to work with so many bits without getting lost
bits are stored in chunks. All values are made of bits, and they all have different roles.
Some values are numbers, text, functions etc.

To create a value you just invoke its name. You just call for one. Every value is stored
Values of number types for example would be 15.


4. What is iteration?

  Your answer: An iteration is a sequence that is called by a function that must
  be completed to get a desired outcome. These are called loops.

  Researched answer:

  Loops allow programers to do something repeatedly, like iterating through an array.
  If you want to execute a function a number of times.There are different types of iterations
  and they repeat an action a number of times. There are different ways to start and end a loop.

-A for statement repeats until a specific condition evaluates to false.
-A do...while statement repeats until a specific condition evaluates to false.
-A label provides a statement with an identifier that will allow you to refer to it later in the program.
-A break statement lets you terminate the loop.
-A continued statement can be used to restart
-The For...in statement iterates a specific variable
-A for...of statement creates a loop over objects.


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Pair programming techniques can use a variety of online tools. For example Zoom and GitHub, sharing screens and controls to work together on a project. Communication is key and exploring ideas together.
In pair programming each party assumes a role. One party is the driver and the other is the navigator.
One is typing out the code, and the other is directing the action.


  Researched answer:

  In pair programming different skill levels can be combined.
  Expert-Expert
  Expert-Novice
  Novice-novice

There are 6 different pair programming techniques.
-Unstructured Pairing: This is a wing it technique, where no party knows of any techniques.
It is trial and error.

-Driver-Navigator:Is the most established style. The driver handles typing, navigating between files, and basic implementation.
The Navigator looks a broader concerns and checks for mistakes. This works well with expert-expert, who can switch roles and expert and novice.

-Backseat Navigator: This looks similar to Driver-Navigator, but this is where the Navigator takes over the tactical and strategic role, and becomes more controlling, the navigator gives out more detailed instructions. This means this person tells the driver, when to open a file or what to name a test or variable. This works good with novice as a drive, with an expert navigator.

-Tour Guide-Works well with expert-novice. The driver acts as a tour guide for the novice tourist and the tourist rarely intervenes. This technique works well with an expert and a novice. Or with a novice driver, and expert observing to provide feedback.

-Ping-Pong Pairing: This technique is used by extreme programers who switch back and forth on each others code. Where one person writes a failing test, and the other fixes it, and vice versa. This works well for experts.

-Distributed-Is an unofficial pairing method. This is for collaborative programing around the world. Perviously collaborative  programming was done in person. Now it is being replaced by remote pair programming.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: When you pass a function as an argument to another function, you pass a callback function, or a higher order function. One function can be returned by another function. That's because a function is an object. You do not invoke the callback function when you pass it as an arguments.  The function that receives it is in charge of invoking it.

Two reasons to use call back functions: To create asynchronous code in which you pass the function at one time but it won't be called until later.

To create utility code that is flexible so it can be used in many situations with many different data types.

2. Jest: Is a JavaScript testing Framework that is focused on simplicity for support for web applications. It is used to ensure correctness of any javascript. 
It was created by Facebook.
Useful commands.
$ yarn add jest
$ yarn jest

3. Objects: A collection of key value pairs of methods and properties. To call (execute a method of an object, you use the syntax in the summary after the tables. Objects contain functions. An object has methods that perform functions that are related to the object as well as properties that represent the data or attributes that are associated with the object.


4. Method: A method performs a function or does an action. when you call a method you may need to pass one or more parameters to it by coding them within parentheses after the method name, separated by commas.


5. Classes: Create objects, they provide a blue print for creating the objects. A class hold data and functions that manipulate data.They are resuable and customizable.
