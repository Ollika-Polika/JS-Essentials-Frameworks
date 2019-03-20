//1. A function which prints str after n seconds.
function printTimeout(str, n) {
	setTimeout(() => {
	console.log(str);
	}, n*1000);
}
printTimeout('hello', 10);


//2. A function which returns sum of all numbers from 1 to n using recursion.
function sumAll(n) {
  if (n === 0) return 0;
  return n + sumAll(--n);
}
console.log(sumAll(2));
console.log(sumAll(4));


//3. A function which takes str and time in seconds as arguments, then every second it should count down
from time to 0 and print current time to console when time equals to 0 it prints str
function bombTimer(str, time) {
let countdown = setInterval (() => {
  console.log(time);
  time--;
  if (time === 0) {
    console.log(str);
    clearInterval(countdown);
  	}
	}, 1000);
}
bombTimer('Boooom!', 3);


//4. A function which returns factorial of number using recursion.
function factorial(n) { 
    if (n === 0) return 1;
    return n * factorial(n-1);  
}
console.log(factorial(3));
console.log(factorial(5));


//5. Implement function from task №3 (bombTimer) using recursion and setTimeout.
function bombTimerRecursion(str, time) {
		setTimeout(() => {
		if (time > 0) { 
			console.log(time);
			return bombTimerRecursion(str, time-1);
			  } else {
			  console.log(str);
			  }
			}, 600);
}
bombTimerRecursion('Boooom!', 5);


//6. A function which takes an array of numbers and maxNumber,the function returns new array with numbers not higher than maxNumber.
function filterNumbers(arr, maxNumber) { 
	let result = arr.filter(elem => elem < maxNumber);
	return result;
}
console.log(filterNumbers([1, 4, 8, 1, 20], 5));


//7. A function that returns object with min and max numbers from array of numbers.
function minMax(arr) {
    arr.sort((a,b) => b - a);
    var object = {
        max: arr[0],
        min: arr[arr.length-1]
    }
    return object;
}
console.log(minMax([1, 4, 8, 2, 20]));


//8. A function that returns average of numbers in array.
function average(arr) {
    let averageValue = arr.reduce( (a,b) => a + b) / arr.length;
    return averageValue.toFixed(2);
}
console.log(average([1,4,2]));


//9. A function which concats all first-nested arrays in one array (use reduce)
function concatFirstNestedArrays(arr) {
	  let x = arr.reduce ((a,b) =>  a.concat(b));
	  return x;
}
console.log(concatFirstNestedArrays([[0, 1], [2, 3], [4, 5]]));

//10. A function accepts array of users and returns object of users where key is user id and value user data.
let users = [
  { id: 1, name: 'John', birthday: '1999-2-12' },
  { id: 2, name: 'Bill', birthday: '1999-1-19' },
  { id: 3, name: 'Carol', birthday: '1999-0-11' },
  { id: 4, name: 'Luce', birthday: '1999-2-22' },
];
function usersToObject(users) {
	  const usersObj = {};
  	users.forEach((user) => {
  	usersObj[user.id] = user;
   });
   return usersObj;
}
console.log(usersToObject(users));


//11. A function returns array of users that have birthdays in a specific month.
const usersList = [
  { name: 'John', birthday: '1999-2-12' },
  { name: 'Bill', birthday: '1999-1-19' },
  { name: 'Carol', birthday: '1999-0-11' },
  { name: 'Luce', birthday: '1999-2-22' }
 ];
function filterUsersByMonth(usersList, month) {
	let newArr = [];
	usersList.forEach ((user) => {
		let dateOfBirth = new Date(user.birthday);
		if(dateOfBirth.getMonth() == month)
			return newArr.push({name: user.name, birthday: user.birthday});
	});
	return newArr;
}
console.log(filterUsersByMonth(usersList, 0));