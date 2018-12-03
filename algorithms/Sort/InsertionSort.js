
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

let arr = [4, 5, 6, 3, 2, 1];
InsertionSort(arr)
console.log(arr);
