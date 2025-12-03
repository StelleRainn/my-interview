function BubbleSort(arr) { // 冒泡排序（含提前退出优化），返回有序新数组
    let flag = 1            // 标志位：上一轮是否发生交换；用于提前结束
    let array = [...arr]    // 复制原数组，避免修改入参

    for (let i = 0; i < array.length - 1 && flag; i++) { // 外层循环控制趟数；若上一趟无交换则提前退出
        flag = 0           // 新一趟开始前重置标志位
        for (let j = 0; j < array.length - i - 1; j++) { // 内层循环：比较相邻元素，将较大值向右“冒泡”
            if (array[j] > array[j+1]) { // 若前一个元素比后一个大则交换
                let temp = array[j]      // 交换相邻元素
                array[j] = array[j+1]
                array[j+1] = temp
                flag = 1                 // 本趟发生交换，保持继续下一趟
            }
        } 
    }

    return array            // 返回排序后的数组副本
}

let arr = [49, 38, 65, 97, 76, 13, 27, 49]

console.log(BubbleSort(arr))
