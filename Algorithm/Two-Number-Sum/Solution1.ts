// T: O(n^2)
// S: O(1)
function Solution1(array: number[], targetSum: number) {
  for (let i = 0; i < array.length - 1; i += 1) {
    const firstNum = array[i];

    for (let j = i + 1; j < array.length; j += 1) {
      const secondNum = array[j];

      // immediately
      if (firstNum + secondNum === targetSum) return [firstNum, secondNum];
    }
  }

  return [];
}
