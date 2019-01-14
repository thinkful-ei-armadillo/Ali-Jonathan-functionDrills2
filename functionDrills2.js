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
