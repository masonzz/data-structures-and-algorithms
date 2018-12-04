/**
 * Created by mason[zhaozhe05@meituan.com] on 2017/12/10.
 */

const SelectionSort = (unsortedArr) => {
   const length = unsortedArr.length;
   let minPosition;
   let minValue;
   // 注意这里的边界情况，只需要到 length - 1 即可
   for (let i = 0; i < length - 1; ++i) {
       minPosition = i;
       minValue = unsortedArr[i];
       let j = i + 1;
       console.log(j);
       for ( ;j < length; ++j) {
           if (minValue > unsortedArr[j]) {
               minPosition = j;
               minValue = unsortedArr[j];
           }
       }
       [unsortedArr[i], unsortedArr[minPosition]] = [unsortedArr[minPosition], unsortedArr[i]];
   }
}

const arr = [4, 8, 6, 3, 2, 1, 0, 12]
SelectionSort(arr);
console.log(arr)
