const fs = require("fs");

fs.readFile("puzzle.txt", "utf-8", (err, data) => {
	//extracts all copies of mul()
	//returns array of all Muls

	/* 
    REGEX EXPLAIN
    / / - for start and end
    (mul****) - brackest means everything inside is connected.
    \d{1,3} - checks for a number between 1 and 3 digits long
    g - makes it global and checks all of it (also removed all unneccessary data from .match())
    */

	const found = data.match(/(mul\(\d{1,3}\,\d{1,3}\))/g);
	const final = [];
	// go through each array item and get the numbers from the mul()
	found.forEach((item) => {
		final.push(item.match(/\d{1,3}\,\d{1,3}/g));
	});

	let total = 0;
	//loop through each array item, split by the , and then times together and add to total sum;
	final.forEach((item) => {
		let tempArray;
		tempArray = item[0].split(",");

		total += tempArray[0] * tempArray[1];
	});

	console.log(total);
});
