/**
 * @param {number[]} height
 * @return {number}
 */

// const height = list[j] > list[i] ? list[i] : list[j];
// 			const width = j - i;
// 			const result = height * width;
// 			if (result > maxArea) {
// 				maxArea = result;
// 优先移动短指针
var maxArea = function (list) {
	let maxArea = 0;
	let leftPointer = 0;
	let rightPointer = list.length - 1;
	while (rightPointer > leftPointer) {
		const height = Math.min(list[leftPointer], list[rightPointer]);
		const width = rightPointer - leftPointer;
		const result = height * width;
		if (result > maxArea) {
			maxArea = result;
		}
		if (list[leftPointer] > list[rightPointer]) {
			rightPointer--;
		} else {
			leftPointer++;
		}
	}

	return maxArea;
};
const testData = [1, 8, 6, 2, 5, 4, 8, 3, 7];

console.log(maxArea(testData));
const testData2 = [1, 1];
console.log(maxArea(testData2));
