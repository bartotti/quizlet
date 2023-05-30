export const questionList = [
    {
      id: 1,
      question: "What is the difference between function and arrow function?",
      answer: "A regular function has its own 'this' context and is suitable for use as a method or constructor. Arrow functions, on the other hand, do not bind their own 'this' context and are useful for concise function expressions and avoiding issues with 'this' binding."
    },
    {
      id: 2,
      question: "What are the benefits of using spread syntax (...) in JavaScript?",
      answer: "Spread syntax allows you to expand elements of an iterable (like an array) into places where multiple elements are expected. It is useful for creating shallow copies of arrays or objects, merging arrays, and passing function arguments dynamically."
    },
    {
      id: 3,
      question: "What is the purpose of the 'use strict' directive in JavaScript?",
      answer: "The 'use strict' directive enables strict mode in JavaScript, which helps to catch common coding mistakes, prevents the use of undeclared variables, disallows duplicate parameter names, and enables certain optimizations. It promotes writing cleaner and more reliable code."
    },
    {
      id: 4,
      question: "What is the event loop in JavaScript and how does it work?",
      answer: "The event loop is a mechanism in JavaScript that allows the runtime environment to handle asynchronous operations. It continuously checks for tasks in the event queue, executes them one by one in a loop, and returns control to the main program when the queue is empty. This enables non-blocking and responsive behavior in JavaScript."
    },
  ];