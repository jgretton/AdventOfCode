const fs = require("fs");
const isSafe = (row) => {
	let isAscending = true;
	let isDescending = true;

	for (let index = 0; index < row.length - 1; index++) {
		const difference = Math.abs(row[index] - row[index + 1]);

		if (difference === 0 || difference > 3) return false;

		if (row[index] > row[index + 1]) isAscending = false;
		if (row[index] < row[index + 1]) isDescending = false;
	}
	// Only return false if it's neither ascending nor descending
	return isAscending || isDescending;
};

fs.readFile("puzzle.txt", "utf-8", (err, data) => {
	//Split each line, then split each number within the array.
	const arr = data.split("\n").map((row) => row.split(" ").map(Number));
	let safe = 0;

	/* 
    if isSafe returns false, remove each value from the array and recheck isSafe

    I think this covers all options and edge cases.

    https://www.freecodecamp.org/news/how-to-remove-an-element-from-a-javascript-array-removing-a-specific-item-in-js/#heading-remove-an-element-at-any-position-of-an-array-with-slice-and-concat
    used this site to find how to remove specific elements from an array
    */
	arr.forEach((row) => {
		if (isSafe(row)) {
			safe++;
			return;
		} else {
			for (let index = 0; index < row.length; index++) {
				//taking all elements before index and concat with all elements after index.
				const newArray = row.slice(0, index).concat(row.slice(index + 1));
				if (isSafe(newArray)) {
					safe++;
					return;
				}
			}
		}
	});
	console.log(safe);
});
