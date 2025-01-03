/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (list) {
	const result = [];
	// 正序
	const sortedList = list.sort((a, b) => a - b);
	// 确立三个指针
	// i i+1 list.length-1
	for (let i = 0; i < sortedList.length - 2; i++) {
		// 跳过i循环的重复的 继续下一个循环
		// break会导致整个循环直接断掉
		if (sortedList[i] === sortedList[i - 1]) continue;
		let leftPointer = i + 1;
		let rightPointer = sortedList.length - 1;
		while (leftPointer < rightPointer) {
			const sum =
				sortedList[i] + sortedList[leftPointer] + sortedList[rightPointer];
			if (sum === 0) {
				result.push([
					sortedList[i],
					sortedList[leftPointer],
					sortedList[rightPointer],
				]);
				// 去除左边重复的值
				// 我么么要去掉的是未来的而不是之前对比过的
				// 如果 leftPointer 一开始就是索引 1（即 i + 1 === 1），那么 sortedList[leftPointer - 1] 访问的是 sortedList[0]，这是合法的。
				// 但如果 leftPointer 是初始值 0，那么 sortedList[leftPointer - 1] 会变成 sortedList[-1]，这是无效的，可能会导致错误。
				// 如果你在 while 循环中使用 sortedList[leftPointer] === sortedList[leftPointer - 1]，可能会跳过所有的 0，从而错过合法解 [0, 0, 0]。
				while (
					leftPointer < rightPointer &&
					sortedList[leftPointer] === sortedList[leftPointer + 1]
				) {
					leftPointer++;
				}
				while (
					leftPointer < rightPointer &&
					sortedList[rightPointer] === sortedList[rightPointer - 1]
				) {
					rightPointer--;
				}
				// 通过同时移动这两个指针，因为这两个指针已经代表找到了对应的值 所以去寻找其他组合
				leftPointer++;
				rightPointer--;
			} else if (sum > 0) {
				rightPointer--;
			} else {
				leftPointer++;
			}
		}
	}
	return result;
};

const testData = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(testData));
const testData2 = [0, 1, 1];
console.log(threeSum(testData2));
const testData3 = [0, 0, 0];
console.log(threeSum(testData3));
