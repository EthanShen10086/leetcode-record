/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
	// set 这个数据结构类似 有唯一值的数组（请注意对象类型 因为存的是引用地址所以会重复）
	// 但是他长得不是数组而是类似  Set(2) { 1, 5 }

	// 如何判断窗口中是否存在重复字符——哈希表，哈希表可以快速判断是否存在重复字符，只要把窗口中的数字存入到哈希表中即可。
	// 当左窗口移动时把离开窗口的字符从哈希表中取出。
	// 如果发现窗口中有重复字符，通过移动左指针 start 来“收缩”窗口，直到窗口恢复无重复字符的状态。

	// 滑动窗口 数组的左右边界代表着 左右窗口
	// 在移动结束后，这个子串就对应着 以左指针开始的，不包含重复字符的最长子串

	const hashTable = new Set();
	let maxCount = 0;
	let leftPointer = 0; // 初始化左指针
	for (let rightPointer = 0; rightPointer < s.length; rightPointer++) {
		while (hashTable.has(s[rightPointer])) {
			hashTable.delete(s[leftPointer]);
			leftPointer++;
		}
		hashTable.add(s[rightPointer]);
		if (hashTable.size > maxCount) {
			maxCount = hashTable.size;
		}
	}
	return maxCount;
};

const testData = 'abcabcbb';
console.log(lengthOfLongestSubstring(testData));
const testData2 = 'bbbbb';
console.log(lengthOfLongestSubstring(testData2));
const testData3 = 'pwwkew';
console.log(lengthOfLongestSubstring(testData3));
const testData4 = 'dvdf';
// 这个例子是可能从后面开始算 最长字符应该是是 vdf  原有的算法有问题是没有从后面开始算
console.log(lengthOfLongestSubstring(testData4));
