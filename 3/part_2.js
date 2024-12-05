const fs = require("fs");
/* 
REGEX as normal but no g so it shoes index of mul.

REGEX for do() and don't().

check indexes. if index of Do is 12, allow next mul() of higher index.


WHAT IF
i split the data at do() and don't()
and then Regex each one from there, ignoring the don'ts?

*/

fs.readFile("puzzle.txt", "utf-8", (err, data) => {
	const arr = data.split("do()");
	// Now get rid of the don't and everything after it in each element of the array.
	// As then everything left will be a do()
	const final = [];
	const doArray = [];
	arr.map((item) => {
		let found = [];
		found = item.match(/(don't)/);

		//if it has a don't, remove everything after it. Only enter mul(xx,xx)
		if (found)
			doArray.push(
				item.slice(0, found.index).match(/(mul\(\d{1,3}\,\d{1,3}\))/g)
			);
		// if not, just add the item, Only enter mul(xx,xx)
		else doArray.push(item.match(/(mul\(\d{1,3}\,\d{1,3}\))/g));
	});

	doArray.forEach((item) => {
		item.forEach((j) => {
			//go through array, only keep the numbers
			final.push(j.match(/\d{1,3}\,\d{1,3}/g));
		});
	});

	let total = 0;
	final.forEach((item) => {
		let tempArray;
		tempArray = item[0].split(",");

		total += tempArray[0] * tempArray[1];
	});

	console.log(total);
});
