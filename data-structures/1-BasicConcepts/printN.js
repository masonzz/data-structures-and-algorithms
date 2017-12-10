/**
 * Created by mason[zhaozhe05@meituan.com] on 2017/12/10.
 */
const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const number = process.argv[2]

const loopPrintN = (n) => {
    for (let i = 1; i < n; i++) {
        // console.log(i);
    }
};

const recursivePrintN = (n) => {
    if (n) {
        recursivePrintN(n - 1);
        // console.log(n);
    }
};

// 添加测试
suite.add('loopPrintN', function () {
    loopPrintN(number);
}).add('recursivePrintN', function () {
    recursivePrintN(number);
}).on('cycle', function (event) {
    // add listeners
    console.log(String(event.target));
}).run({'async': true});

// const loopPrintNT1 = new Date();
// loopPrintN(number);
// const loopPrintNT2 = new Date();
// const loopPrintNTime = loopPrintNT2 - loopPrintNT1;
//
// const recursivePrintNT1 = new Date();
// recursivePrintN(number);
// const recursivePrintNT2 = new Date();
// const recursivePrintNTime = recursivePrintNT2 - recursivePrintNT1;
//
// console.log('loopPrintNTime:', loopPrintNTime);
// console.log('loopPrintNTime:', recursivePrintNTime);