function jediName(firstName, lastName) {
	let firstHalf = lastName.slice(0, 3);
	let secondHalf = firstName.slice(0, 2);
	return firstHalf + secondHalf;
}
console.log(jediName("Abcd", "Efgh"));

function beyond(num) {
	if (num === Infinity) {
		console.log('And beyond');
	} else if (num > 0) {
		console.log('To infinity');
	} else if (num < 0) {
		console.log('To negative infinity');
	} else if (num === 0){
		console.log('Staying home');
	}
}

beyond(33);
beyond(0);
beyond(Infinity);
beyond(-1);

function decode(word) {
	if (word.charAt(0) === "a") {
		word = word.slice(1, 2);
	} else if (word.charAt(0) === "b") {
		word = word.slice(2, 3);
	} else if (word.charAt(0) === "c") {
		word = word.slice(3, 4); 
	} else if (word.charAt(0) === "d") {
		word = word.slice(4, 5);
	} else {
		word = " ";
	}
	return word;
}
function decoder(message) {
	let newMessage = "";
	let encode = message.split(" ");
	for (let i = 0; i < encode.length; i++) {
	newMessage += decode(encode[i]);
	}
	return newMessage;
}
console.log(decoder("craft block argon meter bells brown croon droop"));

function daysInMonth(month, leapYear = 0) {
	let days = 0
	switch(month) {
		case 'February':
			days = 28 + leapYear;
			break;
		case 'January':
		case 'March':
		case 'May':
		case 'July':
		case 'August':
		case 'October':
		case 'December':
			days = 31;
			break;
		case 'April':
		case 'June':
		case 'September':
		case 'November':
			days = 30;
			break;
		default:
		throw new Error("Must provide a valid month");
			try {
				console.log(daysInMonth('December', true));
			} catch(err) {
				console.log("Must provide a valid month");
			}

	}
	return `${month} has ${days} days`;
}


console.log(daysInMonth('December', true));

function rockPaperScissors(num) {
	const randomNo = Math.floor(Math.random() * 3) + 1;
	if (num === randomNo) {
		console.log('Tied');
	} else if (num === 1 && randomNo !== 2) {
		console.log('You win!');
	} else if (num === 2 && randomNo !== 3) {
		console.log('You win!');
	} else if (num === 3 && randomNo !== 1) {
		console.log('You win!');
	} else {
		console.log('Computer wins!');
	}
}

rockPaperScissors(2);
