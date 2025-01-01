/**
 * @param {number[]} nums
 * @return {number}
 */

function desc(a, b) {
	return a - b;
}
function removeDuplicate(list) {
	const map = new Map();
	for (let i = 0; i < list.length; i++) {
		if (!map.has(list[i])) {
			map.set(list[i], list[i]);
		}
	}
	return [...map.values()];
}

var longestConsecutive = function (numberList) {
	if (numberList.length === 0) {
		return 0;
	}
	// 改变原数组
	const removeDuplicateList = removeDuplicate(numberList);
	const sortedList = removeDuplicateList.sort(desc);
	// const sortedList = numberList.sort(desc);
	let count = 0;
	let maxCount = 0;
	for (let i = 0; i < sortedList.length; i++) {
		if (sortedList[i + 1] - sortedList[i] === 1) {
			count++;
		} else {
			count = 0;
		}
		if (count > maxCount) {
			maxCount = count;
		}
	}
	return maxCount + 1;
};
const testData = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutive(testData));
const testData2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log(longestConsecutive(testData2));
const testData3 = [];
console.log(longestConsecutive(testData3));
const testData4 = [1, 2, 0, 1];
console.log(longestConsecutive(testData4));
