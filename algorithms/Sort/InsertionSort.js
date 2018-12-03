
const InsertionSort = (unsortedArr) => {
    const length = unsortedArr.length;
    const sortedArr = unsortedArr.concat();
    if (length < 1) {
        return sortedArr;
    }
    for (let i = 1; i < length; ++i) {
        const value = sortedArr[i];
        let j = i - 1;
        for (; j >=  0; --j) {
            if (sortedArr[j] > value) {
                sortedArr[j+1] = sortedArr[j];
            } else {
                break;
            }
        }
        sortedArr[j+1] = value;
    }
    return sortedArr;
}

let arr = [4, 5, 6, 3, 2, 1];

console.log(InsertionSort(arr));
