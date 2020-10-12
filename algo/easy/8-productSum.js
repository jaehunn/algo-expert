// [2, [4, [5]]] = 2*1 + 2*4 + 3*5
function productSum(array, multiplier = 1) {
  let sum = 0;

  for (const element of array) {
    if (Array.isArray(element)) sum += productSum(element, multiplier + 1);
    else sum += element;
  }

  return sum * multiplier;
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);

// flatten 함수로 풀어보기 - WIP
function flatten(arr) {
  return arr.reduce(function (newArr, toFlatten) {
    return newArr.concat(
      Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten
    );
  }, []);
}
flatten([[1, 2, 3]]);
