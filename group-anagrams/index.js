/**
 * @param {string[]} strList
 * @return {string[][]}
 */
var groupAnagrams = function (strList) {
	const map = new Map();
	for (let i = 0; i < strList.length; i++) {
		// 请注意这里 split('') 不加的话就是一个copy
		// join('') 不加的话就是,
		const sortedStr = strList[i].split('').sort().join('');
		if (!map.has(sortedStr)) {
			map.set(sortedStr, [strList[i]]);
		} else {
			// const arrayData = map.get(sortedStr);
			// arrayData.push(strList[i]);
			// map.set(sortedStr, arrayData);
			map.set(sortedStr, [...map.get(sortedStr), strList[i]]);
		}
	}
	const result = [...map.values()];
	return result;
};

function isSameString(str1, str2) {
	// 如果字符串长度不同，直接返回 false
	if (str1.length !== str2.length) {
		return false;
	}
	// 排序两个字符串并比较是否相等
	return str1.split('').sort().join('') === str2.split('').sort().join('');
}
const testData = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
console.log(groupAnagrams(testData));

const testData2 = [''];
console.log(groupAnagrams(testData2));

const testData3 = ['a'];
console.log(groupAnagrams(testData3));
