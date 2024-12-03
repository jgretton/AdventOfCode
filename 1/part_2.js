import list from "./list.js";

let list_1 = [];
let list_2 = [];
let similarity_score = 0;

//Map through and split initial array into 2.
list.map((item, index) => {
	if (index % 2) {
		list_1.push(item);
	} else list_2.push(item);
});

//Sort numerically
list_1.sort();
list_2.sort();

//loop through list_1. Loop through list_2 for each value in list_1.
// while looping, minus list_1[index] from list_2[index2] and if it = 0 then the value appears.
// Add 1 to the sum value to show it appeared.
// Muliply list_1 value by sum and add to similarity score.
for (let i = 0; i < list_1.length; i++) {
	let sum = 0;
	for (let j = 0; j < list_2.length; j++) {
		// list_1[i] - list_2[j] if === 0;  + 1 to sum;
		if (list_1[i] - list_2[j] === 0) {
			sum++;
		}
	}

	similarity_score = similarity_score + list_1[i] * sum;
}

console.log(similarity_score);
