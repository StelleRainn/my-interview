// 给定两个有序的子序列，合并为一个序列
function Merge(arrA, arrB) {
    const resArr = []
    const srcArr = [...arrA, ...arrB]

    let i = 0, j = arrA.length, k = 0

    while ( i < arrA.length && j < srcArr.length) {
        if ( srcArr[i] < srcArr[j] ) resArr[k++] = srcArr[i++]
        else resArr[k++] = srcArr[j++]
    }

    while ( i < arrA.length ) resArr[k++] = srcArr[i++]
    while ( j < srcArr.length) resArr[k++] = srcArr[j++]
    return resArr
}

const arrA = [1, 3, 5, 7, 9]
const arrB = [2, 4, 6, 8, 10]

const resArr = Merge(arrA, arrB)
console.log(resArr)