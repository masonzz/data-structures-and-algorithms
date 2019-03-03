// // 归并排序算法, A 是数组，n 表示数组大小
// merge_sort(A, n) {
//     merge_sort_c(A, 0, n - 1)
// }

// // 递归调用函数
// merge_sort_c(A, p, r) {
//     // 递归终止条件
//     if p >= r  then return

//     // 取 p 到 r 之间的中间位置 q
//     q = (p + r) / 2
//     // 分治递归
//     merge_sort_c(A, p, q)
//     merge_sort_c(A, q + 1, r)
//     // 将 A[p...q] 和 A[q+1...r] 合并为 A[p...r]
//     merge(A[p...r], A[p...q], A[q + 1...r])
// }

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const Utils = require('../../common/utils');
const generateArrays = Utils.generateArrays;

const mergeSort = (arr) => {
    const length = arr.length;
    if (length <= 1) {
        return;
    }
    mergeSortPart(arr, 0, length -1);
}

const mergeSortPart = (arr, from, to) => {
    if (from >= to) {
        return;
    }
    const partPostion = Math.floor((from + to) / 2);
    mergeSortPart(arr, from, partPostion);
    mergeSortPart(arr, partPostion + 1, to);
    merge(arr, from, partPostion, to);
}

const merge = (arr, from, partPostion, to) => {
    let i = from;
    let j = partPostion + 1;
    let k = 0;
    let tempArr = [];
    while (i <= from && j <= to) {
        if (arr[i] <= arr[j]) {
            tempArr[k++] = arr[i++];
        } else {
            tempArr[k++] = arr[j++];
        }
    }
    let start = i;
    let end = partPostion;
    if (j <= to) {
        start = j;
        end = to;
    }

    while(start <= end) {
        tempArr[k++] = arr[start++];
    }

    for (i = 0; i < to - from; i++) {
        arr[partPostion + i] = tempArr[i];
    }
};

// merge(A[p...r], A[p...q], A[q+1...r]) {
//     var i := p，j := q+1，k := 0 // 初始化变量 i, j, k
//     var tmp := new array[0...r-p] // 申请一个大小跟 A[p...r] 一样的临时数组
//     while i<=q AND j<=r do {
//       if A[i] <= A[j] {
//         tmp[k++] = A[i++] // i++ 等于 i:=i+1
//       } else {
//         tmp[k++] = A[j++]
//       }
//     }

//     // 判断哪个子数组中有剩余的数据
//     var start := i，end := q
//     if j<=r then start := j, end:=r

//     // 将剩余的数据拷贝到临时数组 tmp
//     while start <= end do {
//       tmp[k++] = A[start++]
//     }

//     // 将 tmp 中的数组拷贝回 A[p...r]
//     for i:=0 to r-p do {
//       A[p+i] = tmp[i]
//     }
//   }


let arr = [4, 5, 6, 3, 2, 1];
mergeSort(arr);
console.log(arr);


// // 性能测试
// suite.add('test1', function () {
//     const row = 1000;

//     const unsortedArrays = generateArrays(row);

//     for (let i = 0; i < 200 ; ++i) {
//         bubbleSort(unsortedArrays);
//     }
// }).on('cycle', function (event) {
//     console.log(String(event.target));
// }).run({'async': true});
