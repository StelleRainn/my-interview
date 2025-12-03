function QuickSort(arr) {
    let array = [...arr]
    QSort(array, 0, array.length - 1) 
    return array
}

function QSort(arr, low, high) {
    if (low < high) { // 对子序列做快速排序
        let pivotLoc = Partition(arr, low, high)
        QSort(arr, low, pivotLoc - 1)
        // QSort(arr, pivotLoc, high)
        // 右半段递归用了 pivotLoc 而不是 pivotLoc + 1 。当 pivotLoc === low 时，区间不缩小，递归死循环。
        QSort(arr, pivotLoc + 1, high)
    }
}

function Partition(arr, low, high) {
    // const pivotKey = arr[0] 
    // 分区函数总是用 arr[0] 作为枢轴，而不是当前子数组的 arr[low] ，递归到子数组时分区错误，也会让递归无法收敛。
    const pivotKey = arr[low]

    while (low < high) {
        while (low < high && arr[high] >= pivotKey) high--
        arr[low] = arr[high]
        while (low < high && arr[low] <= pivotKey) low++
        arr[high] = arr[low]
    }
    arr[low] = pivotKey
    return low
}

let arr = [49, 38, 65, 97, 76, 13, 27, 49]

console.log(QuickSort(arr))