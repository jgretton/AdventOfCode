const fs = require("fs");

/* 

Arr is reading in as strings not numbers. need to parse items;

*/

fs.readFile("puzzle.txt", "utf-8", (err, data) => {
	//split each line, then split each number within the array.
	const arr = data.split("\n").map((row) => row.split(" ").map(Number));
	const isSorted = (arr) => {
		// if number is al{ways negative then ascending
		let isAscending = true;
		let isDescending = true;
		for (let index = 0; index < arr.length - 1; index++) {
			if (arr[index] > arr[index + 1]) isAscending = false;
			else if (arr[index] < arr[index + 1]) isDescending = false;
		}
		return isAscending || isDescending;
		//if always positive then descending.
	};
	const isDiffer = (arr) => {
		let result = true;
		for (let index = 0; index < arr.length - 1; index++) {
			const difference = Math.abs(arr[index] - arr[index + 1]);
			if (difference === 0 || difference > 3) {
				return (result = false);
			}
		}
		return result;
	};

	let safe = 0;

	for (let index = 0; index < arr.length; index++) {
		// console.log(index);
		const check_1 = isSorted(arr[index]);
		// console.log(check_1, " - ", index + 1);
		const check_2 = isDiffer(arr[index]);
		// console.log("index[", index, "] - ", check_1, check_2, safe);
		if (check_1 === true && check_2 === true) {
			safe++;
			// console.log("index[", index, "] - ", safe);
			// console.log(safe);
		}
	}
	console.log(safe);
});
