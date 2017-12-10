/**
 * Created by mason[zhaozhe05@meituan.com] on 2017/12/10.
 */

const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

// 普通写法
const PolynomialEvaluationNormal = (n, arr, x) => {
    let p = arr[0];
    for (let i = 1; i <= n; i++) {
        p += arr[i] * Math.pow(x, i);
    }
    // console.log(p);
};

// 结合律
const PolynomialEvaluationBinding = (n, arr, x) => {
    let p = arr[n];
    for (let i = n; i > 0; i--) {
        p = arr[i - 1] + x * p;
    }
    // console.log(p);
};


const num = Math.floor(100);
let array = new Array(num).fill(10);

// PolynomialEvaluationNormal(num - 1, array, 2);
// PolynomialEvaluationBinding(num - 1, array, 2);

// 添加测试
suite.add('PolynomialEvaluationNormal', function () {
    PolynomialEvaluationNormal(num - 1, array, 5);
}).add('PolynomialEvaluationBinding', function () {
    PolynomialEvaluationBinding(num - 1, array, 5);
}).on('cycle', function (event) {
    // add listeners
    console.log(String(event.target));
}).run({'async': true});