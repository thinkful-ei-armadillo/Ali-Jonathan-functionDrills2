function jediName(firstName, lastName) {
	let firstHalf = lastName.slice(0, 3);
	let secondHalf = firstName.slice(0, 2);
	return firstHalf + secondHalf;
}
console.log(jediName("Abcd", "Efgh"));

