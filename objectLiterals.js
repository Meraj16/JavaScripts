fName = 'meraj'
LName = 'alam'

let employee = {
  fName,
  LName
  // fName: fName,
  // LName: LName
}

console.log(employee)

// ----------------------------------------

function createPerson(fname,lname,age){
  let fullname = fname + lname
  return {
    fname,
    lname,
    fullname,
    // isSenior: function(){}
    isSenior(){
      return age > 50
    }
  }
}
 let P = createPerson('rohan','kumar','59')
 console.log(P)
 console.log(P.isSenior())

 