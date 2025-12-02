// 简单选择排序

let SelectSort = (arr) => {
    let n = arr.length
    let array = [...arr]

    // 外层循环：遍历整个数组，i 表示当前已排序部分的末尾索引
    for (let i = 0; i < n; i++) {
        let minIndex = i

        // 内层循环：在未排序区域 [i+1, n-1] 中查找实际的最小元素
        for (let j = i + 1; j < n; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }

        // 如果找到的最小元素不是当前位置 i 的元素，则进行交换
        if (minIndex !== i) {
                [array[minIndex], array[i]] = [array[i], array[minIndex]]
            }
    }
    return array
}

const data = [64, 25, 12, 22, 11];
console.log("原始数组:", data);

const sortedData = SelectSort(data);
console.log("排序后数组:", sortedData);