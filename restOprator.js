let displayColors = function(messege,...colors){
  // ...colors is an Rest oprator 
  // taking individual perameter and convert into an array
  console.log(messege);
  console.log(colors);
  console.log(arguments.length)

  for(let i in colors){
    console.log(colors[i])
  }
}

let messege = "list of colors"

displayColors(messege,'red')
displayColors(messege,'red','blue')
displayColors(messege,'yellow','orange','pink')

// arrow function is not working hear ask abhisek sir

let colorArray = ['blue','white','black']

// spread operator

displayColors(messege,...colorArray)