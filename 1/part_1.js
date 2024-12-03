// import list from "./list";
// let list_1 = [];
// let list_2 = [];

// //Map through and split initial array into 2.
// list.map((item, index) => {
// 	if (index % 2) {
// 		list_1.push(item);
// 	} else list_2.push(item);
// });

// //Sort numerically
// list_1.sort();
// list_2.sort();

// //go through each index, minus values to find the gap, math absolute to make sure its positive.
// // add to accumulation to get final value.
// for (let index = 0; index < list_1.length; index++) {
// 	acummulation = acummulation + Math.abs(list_1[index] - list_2[index]);
// }

// // console.log(acummulation);
const fs = require("fs");

fs.readFile("puzzle.txt", "utf-8", (err, data) => {
	//split each line into its own array and into its own items.
	const arr = data.split("\n").map((row) => row.split("   "));

	// Learnt that if you add an array item in the map function it uses array deconstruction to get the first element.
	const list_1 = arr.map(([item]) => +item).sort();
	const list_2 = arr.map(([, item]) => +item).sort();

	let acummulation = 0;

	for (let index = 0; index < list_1.length; index++) {
		acummulation = acummulation + Math.abs(list_1[index] - list_2[index]);
	}

	console.log(acummulation);
});
