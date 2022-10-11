const calculateAge = (givenDate) => {
  //function to get difference
  let dateNow = Date.now(); //get date today in milliseconds
  let givenDateInMs = Date.parse(givenDate); //get inputted date in milliseconds
  return Math.floor(getMsFromDate(dateNow) - getMsFromDate(givenDateInMs)); //return difference of two dates to whole year
};

const getMsFromDate = (givenDate) => {
  //function to calculate years from milliseconds
  const yearInMs = 31556952000; //amount of milliseconds in a year
  var ageFromJan1970 = givenDate / yearInMs; //divide total to get years
  return ageFromJan1970; //return
};

var userInput = prompt("please enter a date in the format -1990-01-01-"); //get input

console.log(calculateAge(userInput)); //log function
