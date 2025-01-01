/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (numList) {
	let zeroCount = 0;
	// 相当于我用我用一个参数记录zero的count
	// 并且我把0的覆盖掉
	//  然后在zeroCount之后全部置为0
	for (let i = 0; i < numList.length; i++) {
		if (numList[i] !== 0) {
			numList[zeroCount++] = numList[i];
		}
	}
	for (let i = zeroCount; i < numList.length; i++) {
		numList[i] = 0;
	}
    console.log(numList)
};

const testData = [0, 1, 0, 3, 12];
moveZeroes(testData)
const testData2 = [0];
moveZeroes(testData2)