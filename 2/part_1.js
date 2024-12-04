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

	arr.forEach((row) => {
		if (isSafe(row)) {
			safe++;
			return;
		}
	});
	console.log(safe);
});
