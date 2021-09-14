
console.log("-----------Array Distructiong-----------");
// Array Distructiong

let employee = ['meraj','alam','male']

let [fname,lname,gender=femail] = employee
// let [fname,...restData] = employee
// let [ , , gender] = employee

console.log(fname)
console.log(lname)
console.log(gender)

// console.log(restData)

console.log("-----------Object Distructiong-----------");

let employees = {
  fName: 'meraj',
  lName: 'alam',
  Gender: 'male'

}
//  let { fName,lName,Gender } = employees
// creating allieas
let { fName : F, lName : L, Gender : G } = employees

console.log(F)
console.log(L)
console.log(G)

// console.log(fName)
// console.log(lName)
// console.log(Gender)
