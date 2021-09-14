const methordOne = () => {
  return "it will return one"
}

// const methordTwo = () => {
//   setTimeout(() => {
//     return "it will returndTwo"
//   },3000)
// }

const methordTwo = () => {
  return new Promise( (res,rej) => {
    setTimeout( () => {
        res ('i am two')
    },3000);
  })
}

const methordThree = () => {
  return "it will return Three"
}

const callMe = async() => {
  const valOne = methordOne()
  console.log(valOne)

  const valTwo = await methordTwo()
  console.log(valTwo)

  const valThree = methordThree()
  console.log(valThree)
}

callMe()