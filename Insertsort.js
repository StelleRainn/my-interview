// 直接插入排序

let InsertSort = (array) => { // 定义插入排序函数，参数为数组
    let i, j // 外层和内层循环索引
    let temp // 临时存储当前待插入的元素
    for( i = 1; i < array.length; i++) { // 从索引 1 开始遍历，左侧视为已排序
        if (array[i] < array[i-1]) { // 当前元素比前一元素小，启动插入流程
            temp = array[i] // 把当前元素保存到临时变量
            array[i] = array[i - 1] // 先将前一个元素右移一位，为插入腾出空间
            for ( j = i-1; j >= 0 && array[j] > temp; j--) { // 向左扫描，移动所有大于 temp 的元素
                array[j + 1] = array[j] // 将较大的元素右移一位
            } // 内层循环结束
            array[j + 1] = temp // 在正确位置插入 temp
        } // 条件判断结束
    } // 外层循环结束
} // 函数结束

let array = [5,4,3,2,11]

let array2 = [49, 38, 65, 97, 76, 13, 27, 49]

InsertSort(array)
InsertSort(array2)

// array.sort((a,b) => a - b)

console.log(array)
console.log(array2)
