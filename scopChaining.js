// own scope

console.log(`own variable in own scope`)

var fname = 'meraj'
console.log(fname)

function oneLevelDepth(){
  title = 'md'
  console.log(title)
  function twoLevelDepth(){
    lname = 'alam'
    console.log(lname)
  }
  twoLevelDepth()
}
oneLevelDepth()

// globle scope
console.log(`one  variable in diffrent scope form global scope`)

var Name = 'meraj'
console.log(`line no 19 ${Name}`)

function oneLevel(){
  console.log(`line no 23 ${Name}`)

  function twoLevel(){
    console.log(`line no 26 ${Name}`)
  }
  twoLevel()
}
oneLevel()