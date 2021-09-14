//  By using var 
// scope of var is in all function
function greetPersonVar(name){
  if (name = "meraj"){
    var greet = `hello ${name} in var`
  }else{
    var greet = "hi!!  there"
  }
  console.log(greet)
}

// Bu using let 
// scope is only in block 

function greetPersonLet(name){
  let greet
  if (name = "meraj"){
    greet = `hello ${name} in let `
  }else{
    greet = "hi!!  there"
  }
  console.log(greet)
}

// function calling
greetPersonVar("meraj")
greetPersonLet("meraj")

// 2nd example

var a=1;
var b=2;
if(a === 1){
  var a = 10;
  let b = 20;
  console.log(a,b)
}
console.log(a,b)