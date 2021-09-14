/*
  global context and execution context 

  Rule 1 - function decelaretion are scaned and made available.
  Rule 2 - varible decelarition are scan and made undefine
*/

// normal function  Rule 1
hello()

function hello(){
  console.log('hello meraj')
}


// function in variable

var hiVariable = function (){
  console.log('hello meraj line no 21 execution')
}

hiVariable()

// varibal  Rule 2
console.log(name1)
var name1 = 'meraj'
console.log(name1)
 