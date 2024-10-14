Array.prototype.myFilter = function (callback, thisArg) {
  let filteredArr = [];
  let originalArr = this;

  for (let index = 0; index < originalArr.length; index++) {
    const element = originalArr[index];

    if (typeof callback !== 'function') {
      throw new TypeError(callback + 'is not a function');
    }
    if (index in originalArr) {
      if (callback.call(thisArg, element, index, originalArr)) {
        filteredArr.push(element);
      }
    }
  }
  return filteredArr;
};

const arr = [1, 2, 4, 5, 6, 7, 8];
const oddNums = arr.myFilter((num) => num % 2 !== 0);
console.log(oddNums);
