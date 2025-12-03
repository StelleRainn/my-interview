// 相邻两个有序子序列的合并
// 将 src[low...mid] 和 src[mid+1...high] 合并到 res
function Merge(src, res, low, mid, high) {
    let i = low, j = mid + 1, k = low
    while (i <= mid && j <= high) {
        if (src[i] <= src[j]) res[k++] = src[i++]
        else res[k++] = src[j++]
    }
    while (i <= mid) res[k++] = src[i++]
    while (j <= high) res[k++] = src[j++]
}

// 归并排序
// 将 src 归并排序后放入 res 中
function MSort(src, res, low, high) {
    if (low >= high) return
    const mid = (low + high) >> 1
    MSort(src, res, low, mid)
    MSort(src, res, mid + 1, high)
    Merge(src, res, low, mid, high)
    for (let i = low; i <= high; i++) src[i] = res[i]
}

function MergingSort(arr) {
    const tmp = new Array(arr.length)
    MSort(arr, tmp, 0, arr.length - 1)
    return arr
}

let arr = [49, 38, 65, 97, 76, 13, 27, 49]

console.log(MergingSort(arr))
