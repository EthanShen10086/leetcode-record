var twoSum = function (list, target) {
	const map = new Map();
	for (let i = 0; i < list.length; i++) {
		const rest = target - list[i];
		if (map.has(rest)) {
			return [i, map.get(rest)];
		}
        // 在后面是为了防止一次性返回相同的，因为map在后面可以保证map存的是旧的值 如果是循环到的永远是最新的 然后直接return
        // 用obj的结构也可以 但是 就是相反的 用 in 去取 value
		if (!map.get(list[i])) {
			map.set(list[i], i);
		}
	}
};
const result = twoSum([2, 5, 5, 10], 10);
console.log('yyh test', result);
