0x01-ES6_Promise 🎉
Welcome to the 0x01-ES6_Promise project! In this exciting journey, you'll learn about JavaScript Promises, handling asynchronous operations like a pro, and more. Buckle up, and let's dive in! 🚀

Table of Contents 📚
Introduction
Learning Objectives
Requirements
Tasks Overview
Task 0: Keep every promise you make and only make promises you can keep 💡
Task 1: Don't make a promise...if you know you can't keep it 🤔
Task 2: Catch me if you can! 🕵️‍♂️
Task 3: Handle multiple successful promises 🏆
Task 4: Simple promise 🎈
Task 5: Reject the promises ❌
Task 6: Handle multiple promises 🤹‍♀️
Task 7: Load balancer ⚖️
Task 8: Throw error / try catch 🚨
Task 9: Throw an error 🛑
Task 10: Await / Async ⏳
Introduction 🎉
In this project, you’ll master the art of handling asynchronous operations in JavaScript using Promises. Promises allow you to handle operations that take some time to complete (like fetching data from an API) without blocking the execution of your code. 📡

Learning Objectives 📚
By the end of this project, you should be able to:

Understand what Promises are and why they’re useful.
Utilize the then, resolve, and catch methods of Promises.
Work with all methods of the Promise object.
Handle errors gracefully using try/catch and throw.
Use the await operator and write async functions for cleaner code.
Requirements ✅
NodeJS 12.11.x or later
Jest, Babel, and ESLint installed (via npm install in your project directory)
Code will be tested using Jest with the command npm run test
All functions should be exported from your files
Tasks Overview 🚀
Task 0: Keep every promise you make and only make promises you can keep 💡
Objective: Implement a simple function, getResponseFromAPI(), that returns a Promise.

Key Notes:

This task is all about understanding the basic structure of Promises.
The function should return a new Promise that does…well, nothing fancy yet. 😄
Task 1: Don't make a promise...if you know you can't keep it 🤔
Objective: Create a function, getFullResponseFromAPI(success), that returns different outcomes based on a boolean parameter.

Key Notes:

If success is true, resolve the Promise with a success message.
If success is false, reject the Promise with an error message.
This is a practical example of handling different states in Promises.
Task 2: Catch me if you can! 🕵️‍♂️
Objective: Implement handleResponseFromAPI(promise) that handles resolved and rejected Promises.

Key Notes:

Handle both success and failure cases.
Log Got a response from the API for every resolved Promise.
The focus here is on chaining .then and .catch.
Task 3: Handle multiple successful promises 🏆
Objective: Work with uploadPhoto and createUser functions to handle multiple Promises.

Key Notes:

Use Promise.all() to handle multiple Promises.
Log both success results together or handle errors gracefully.
You’ll learn how to work with multiple Promises at once. 🎉
Task 4: Simple promise 🎈
Objective: Write signUpUser(firstName, lastName) that returns a resolved Promise with user details.

Key Notes:

Simulate a successful user signup by returning a resolved Promise with user data.
This task helps you practice resolving Promises with specific values.
Task 5: Reject the promises ❌
Objective: Write uploadPhoto(fileName) that rejects a Promise with an error message.

Key Notes:

Learn how to handle rejected Promises.
Return an error message indicating the file cannot be processed.
Task 6: Handle multiple promises 🤹‍♀️
Objective: Use signUpUser and uploadPhoto together in handleProfileSignup.

Key Notes:

Use Promise.allSettled() to handle multiple Promises and return their statuses.
This is all about handling success and failure cases in parallel. 💪
Task 7: Load balancer ⚖️
Objective: Write loadBalancer(chinaDownload, USDownload) to return the value of the fastest Promise.

Key Notes:

This is a fun exercise in racing Promises! 🏎️
Return the result of the first Promise that resolves.
Task 8: Throw error / try catch 🚨
Objective: Implement divideFunction(numerator, denominator) that throws an error when dividing by zero.

Key Notes:

This task teaches you how to throw and catch errors in JavaScript.
Handle errors properly when the denominator is zero.
Task 9: Throw an error 🛑
Objective: Create guardrail(mathFunction) to handle errors and ensure a final message is logged.

Key Notes:

Catch any errors thrown by mathFunction.
Always add a final message to your result array, whether an error occurs or not.
Task 10: Await / Async ⏳
Objective: Implement asyncUploadUser() using async/await to handle Promises.

Key Notes:

Use await to handle Promises more elegantly.
Return user data and photo if both Promises resolve, or handle errors gracefully by returning null values.
Have fun coding! 😎 Remember, Promises are your best friends when it comes to handling asynchronous operations in JavaScript. Keep practicing, and you'll be a Promise expert in no time! 💻🎉

