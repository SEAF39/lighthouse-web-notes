  // main.js
  
  const sayHelloTo = require('./myModule');
  
  console.log('sayHelloTo: ', sayHelloTo);
  
  sayHelloTo('Bernie');
  
  Now, when we run the main.js file, it should print:
  
  sayHelloTo: [Function: sayHelloTo]
  Hello, Bernie