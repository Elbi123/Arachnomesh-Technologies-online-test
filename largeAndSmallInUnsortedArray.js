const findAvgOfSmallestAndLargesNumber = (arr) => {
    let min = arr[0];
    let max = arr[0];

    arr.forEach((el) => {
        if (min > el) {
            min = el;
        }

        if (max < el || max == el) {
            max = el;
        }
    });

    let newArr = arr.filter((el) => {
        return el == min || el == max;
    });

    return newArr.reduce((prev, curr) => prev + curr) / newArr.length;
};

let testData1 = [1, 4, 3, 2];
let testData2 = [1, 4, 3, 4];

console.log(findAvgOfSmallestAndLargesNumber(testData1));
console.log(findAvgOfSmallestAndLargesNumber(testData2));
