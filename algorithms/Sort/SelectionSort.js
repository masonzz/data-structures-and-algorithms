/**
 * Created by mason[zhaozhe05@meituan.com] on 2017/12/10.
 */

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const Utils = require('../../common/utils');
const generateArrays = Utils.generateArrays;

const SelectionSort = (unsortedArr) => {
   const length = unsortedArr.length;
   let minPosition;
   let minValue;
   // 注意这里的边界情况，只需要到 length - 1 即可
   for (let i = 0; i < length - 1; ++i) {
       minPosition = i;
       minValue = unsortedArr[i];
       let j = i + 1;
       for ( ;j < length; ++j) {
           if (minValue > unsortedArr[j]) {
               minPosition = j;
               minValue = unsortedArr[j];
           }
       }
       [unsortedArr[i], unsortedArr[minPosition]] = [unsortedArr[minPosition], unsortedArr[i]];
   }
}

// const arr = [4, 8, 6, 3, 2, 1, 0, 12]
// SelectionSort(arr);
// console.log(arr)

// 性能测试
suite.add('test1', function () {
    const row = 1000;

    const unsortedArrays = generateArrays(row);

    for (let i = 0; i < 200; ++i) {
        SelectionSort(unsortedArrays);
    }
}).on('cycle', function (event) {
    console.log(String(event.target));
}).run({'async': true});
