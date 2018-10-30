const bubbleSort = (arr) => {
    const length = arr.length;
    if (length <= 2) return;
    for (let i = 0; i < length; ++i) {
        // 提前退出冒泡循环的标志
        let flag = false;
        for (let j = 0; j < length - i - 1; ++j) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                flag = true;
            }
        }
        if (!flag) break;
    }
}

let arr = [4, 5, 6, 3, 2, 1];
bubbleSort(arr);
console.log(arr);
