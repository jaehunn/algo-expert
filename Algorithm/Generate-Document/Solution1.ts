// T: O(m * (n + m)), n is the number of characters and m is the length of the document.
// S: O(1)

// 핵심은 document 로 만드는 게 목적이 아니라, 만들 수 있는지를 확인만 하면 된다.
// 만들 수 있는지를 어떻게 확인할까? 핵심은 characters 의 문자가 document 를 만들고도 남아도 되는 것이다.
// 남아도 되는 것이면, 조합을 일일이 구해서 매칭해보지말고 document 의 각 문자의 개수가 characters 에서 부족하지않는지만 확인하면 된다.
export function Solution1(chracters: string, document: string) {
  for (const character of document) {
    const documentFrequency = helper(character, document);
    const charactersFrequency = helper(character, chracters);

    if (documentFrequency > charactersFrequency) return false;
  }

  return true;
}

export function helper(character: string, target: string) {
  let frequency = 0;
  for (const char of target) {
    if (char === character) frequency += 1;
  }

  return frequency;
}
