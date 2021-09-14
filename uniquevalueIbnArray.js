/* Unique value of an array 
    if input willl be [5,2,2,8,8,9,3] 
    then output should be [5,9,3]
*/

var uniqueCount = [5,2,2,8,8,9,3]

var count = {};
uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count);


var result = []
Object.entries(count).forEach(
  ([key,value]) => {
    if(value === 1){
      result.push(parseInt(key))
    }
  }
  )
  console.log(result)