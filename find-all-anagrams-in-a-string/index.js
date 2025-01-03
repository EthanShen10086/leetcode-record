/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, target) {
	// 解决了s为空或者target为空
	if (target.length > s.length) {
		return [];
	}
	const result = [];
	const aNumber = getCharNumber('a', 0);
	let leftPointer = 0;
	const targetLength = target.length;
	const targetList = Array.from({ length: 26 }, () => 0);
	const countList = Array.from({ length: 26 }, () => 0);
	// 计算target的字符的count
	for (let i = 0; i < targetLength; i++) {
		targetList[getCharNumber(target, i) - aNumber]++;
	}

	for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
		countList[getCharNumber(s, rightPointer) - aNumber]++;
		// 当 rightPointer  - leftPointer + 1 =  targetLength 时开始计算
		if (rightPointer - leftPointer + 1 === targetLength) {
			// 在前就不会错过之前的
			if (isSameArray(countList, targetList)) {
				result.push(leftPointer);
			}
			countList[getCharNumber(s, leftPointer) - aNumber]--;
			leftPointer++;
		}
	}
	return result;
};
// 给出字符串的第index个数 从0记
function getCharNumber(str, index) {
	return str.charCodeAt(index);
}

function isSameArray(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] !== arr2[i]) {
			return false;
		}
	}
	return true;
}

const testData = 'cbaebabacd';
const target = 'abc';
console.log(findAnagrams(testData, target));

const testData2 = 'abab';
const target2 = 'ab';
console.log(findAnagrams(testData2, target2));
