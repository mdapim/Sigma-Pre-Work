const findMaxAndMin = (numberList) => {
  var splitArray = String(numberList).split(","); //split input into array
  var maxAndMin = [parseInt(splitArray[0]), parseInt(splitArray[0])]; //max and min default val

  splitArray.forEach((number) => {
    var num = parseInt(number); //convert to number
    if (num > maxAndMin[1]) maxAndMin[1] = num; //if bigger input into array
    if (num < maxAndMin[0]) maxAndMin[0] = num; //if smaller input into array
  });
  return maxAndMin; //return array
};

const inputNumbers = prompt(
  "Please input a range of numbers separated by commas e.g. 2,4,1,0,2,-1:    "
);

console.log(findMaxAndMin(inputNumbers)); //call function with input
