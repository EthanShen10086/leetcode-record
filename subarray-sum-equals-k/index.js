/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 1.	前缀和：前缀和表示数组中从第一个元素到当前位置的累加和，用一个变量 sum 来维护当前的前缀和。
var subarraySum = function (list, target) {
	const map = new Map();
	// 前缀和为0的情况 即 第一个 (sum - 前缀和  = list[i]) === 0的情况
	// map 后面的值其实是代表了前面有连续的 前缀和 为 sum - target的次数
	// 我实际用的是count去计算的 所以 map 只是记录 前缀和的表
	map.set(0, 1);
	let count = 0;
	let sum = 0;
	for (let i = 0; i < list.length; ++i) {
		sum += list[i];
		let prefixSum = sum - target;
		if (map.has(prefixSum)) {
			count += map.get(prefixSum);
		}
		let prefixSumCount = map.get(sum) || 0;
		map.set(sum, ++prefixSumCount);
	}
	return count;
};

const testData = [1, 1, 1];
const target = 2;
console.log(subarraySum(testData, target));
const testData2 = [1, 2, 3];
const target2 = 3;
console.log(subarraySum(testData2, target2));
