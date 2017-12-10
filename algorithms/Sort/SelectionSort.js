/**
 * Created by mason[zhaozhe05@meituan.com] on 2017/12/10.
 */
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

const SelectionSort1 = (unsortedArray) => {
    const length = unsortedArray.length;
    const arr = unsortedArray.slice();
    let minPosition;
    let minValue;
    let swapValue;
    for (let i = 0; i < length; i++) {
        minPosition = i;
        minValue = arr[i];
        for (let j = i; j < length; j++) {
            if (arr[j] < minValue) {
                minValue = arr[j];
                minPosition = j;
            }
        }
        if (minPosition !== i) {
            swapValue = arr[i];
            arr[i] = arr[minPosition];
            arr[minPosition] = swapValue;
        }
    }
    return arr;
};

const SelectionSort2 = (unsortedArray) => {
    const length = unsortedArray.length;
    const arr = unsortedArray.slice();
    let minPosition;
    let minValue;
    let swapValue;
    for (let i = 0; i < length; i++) {
        minPosition = i;
        minValue = arr[i];
        for (let j = i; j < length; j++) {
            if (arr[j] < minValue) {
                minValue = arr[j];
                minPosition = j;
            }
        }
        swapValue = arr[i];
        arr[i] = arr[minPosition];
        arr[minPosition] = swapValue;
    }
    return arr;
};

const num = 100;
let unsortedArray = [];
for (let i = 0; i < num; i++) {
    unsortedArray[i] = Math.floor(Math.random() * 100);
}

// console.log('unsortedArray:', unsortedArray);
// const sortedArray = SelectionSort(unsortedArray);
// console.log('sortedArray:', sortedArray);


// 添加测试
suite.add('test1', function () {
    SelectionSort1(unsortedArray);
}).add('test2', function () {
    SelectionSort2(unsortedArray);
}).on('cycle', function (event) {
    // add listeners
    console.log(String(event.target));
}).run({'async': true});