
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const Utils = require('../../common/utils');
const generateArrays = Utils.generateArrays;

const InsertionSort = (unsortedArr) => {
    const length = unsortedArr.length;
    if (length <= 1) {
        return sortedArr;
    }
    for (let i = 1; i < length; ++i) {
        const value = unsortedArr[i];
        let j = i - 1;
        for (; j >=  0; --j) {
            if (unsortedArr[j] > value) {
                unsortedArr[j+1] = unsortedArr[j];
            } else {
                break;
            }
        }
        unsortedArr[j+1] = value;
    }
}

// let arr = [4, 5, 6, 3, 2, 1];
// InsertionSort(arr)
// console.log(arr);

// 性能测试
suite.add('test1', function () {
    const row = 1000;

    const unsortedArrays = generateArrays(row);

    for (let i = 0; i < 200; ++i) {
        InsertionSort(unsortedArrays);
    }
}).on('cycle', function (event) {
    console.log(String(event.target));
}).run({'async': true});
