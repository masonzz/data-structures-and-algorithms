/**
 * generate arrays: support two arguments
 * pass one argument will generate one dimensional array
 * pass two arguments will generate two dimensional array
 * @param  {} row
 * @param  {} col=0
 */
const generateArrays = (row, col = 0) => {
    if (typeof row !== 'number' || typeof col !== 'number' ) {
        throw new TypeError('The arguments should be of type Number');
    }
    if ( row < 0 || col < 0) {
        throw new RangeError('The arguments should be Positive integer');
    }
    let array = [];
    if ( col === 0) {
        for (let i = 0; i < row; ++i) {
            array[i] = Math.floor(Math.random() * row * 10);
        }
        return array;
    }
    for (let i = 0; i < row; ++i) {
        const innerArr = [];
        for (let j = 0; j < col; ++j) {
            innerArr[j] = Math.floor(Math.random() * 100);
        }
        array[i] = innerArr;
    }
    return array;
}

module.exports = {
    generateArrays,
}
