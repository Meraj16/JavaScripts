for(let i= 1; i<= 5; i++){

  setTimeout(function(){console.log(i)},1000)

}

//Read about closer
// read about imidate invocket function

//this keyword in function



var employee = {
  id: 1,
  greet: function(){
    var self = this;
    // we can get same result with the help of  arrow function
    setTimeout(function(){console.log(self.id)},1000)
  }
}

employee.greet();

console.log("*************************")