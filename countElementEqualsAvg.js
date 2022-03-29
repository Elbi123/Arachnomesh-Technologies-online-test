const countElementEqualsAvg = (arr) => {
    let avg = arr.reduce((prev, curr) => prev + curr, 0) / arr.length;

    let wantedArr = arr.filter((el) => {
        return el == avg;
    });

    return wantedArr.length;
};

let test1 = [4, 4, 4, 4];
let test2 = [2, 4, 6];
let test3 = [1, 3, 5, 7, 9];

console.log(countElementEqualsAvg(test2));
console.log(countElementEqualsAvg(test1));
console.log(countElementEqualsAvg(test3));
