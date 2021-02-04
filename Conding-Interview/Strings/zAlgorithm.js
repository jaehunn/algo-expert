// @see https://www.youtube.com/watch?v=CpZh4eF8QBw&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=70

// wip

// Z 는 현재 i 에 대한 S[i] 와 S 의 prefix 부터 하나씩 매칭시켜 최대로 매칭되는 값이다.

// text = x a b c a b g a b c
// pattern = a b c = 3

// S =pattern + $ + text = a b c $ x a b c a b g a b c
// Z = 0 0 0 0 0 3 0 0 2 0 0 3 0 0

// Z index 5, 11 -> S index 1, 7

function zAlgorithm(text, word) {
  let r = [];

  let zS = `${text}$${word}`;
  const Z = buildZ(zS);

  for (let i = 1; i < Z.length; i += 1) {
    if (Z[i] === word.length) {
      const v = i - word.length - 1; // (-1: $ length)

      r.push(v);
    }
  }

  return r;
}

function buildZ(zS) {
  const Z = new Array(zS.length).fill(0);

  let zLi = 0;
  let zRi = 0;

  let zShift = 0;

  for (let i = 1; i < zS.length; i += 1) {
    if (i > zRi) {
      // ...
    } else {
      // ...
    }
  }
}
