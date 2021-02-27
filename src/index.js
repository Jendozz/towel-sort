
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix == undefined){
  let arr = [];
  return arr; 
} 

  let result = []
  let count = 1
  for (let i = 0 ; i < matrix.length; i++)
  {
    if(i == count)
    {
      let reverseArr = matrix[i].reverse();
      result = result.concat(reverseArr)
      count += 2
    }
    else
    {
      result = result.concat(matrix[i])
    }
  }
return result;
}
