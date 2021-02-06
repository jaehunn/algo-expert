// @see https://www.youtube.com/watch?v=CpZh4eF8QBw&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=70

// wip
function zAlgorithm(text, word) {
  let r = [];

  let zS = `${word}$${text}`;
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

  // Z-box
  let zLi = 0;
  let zRi = 0;

  let zShift = 0;

  for (let i = 1; i < zS.length; i += 1) {
    // z-box 를 벗어난 경우, 박스의 시작과 끝 인덱스를 시작점에 맞추고 다시 패턴 매칭을 시작한다.
    if (i > zRi) {
      zLi = i;
      zRi = i;

      while (zRi < zS.length && zS[zRi - zLi] === zS[zRi]) zRi += 1;

      Z[i] = zRi - zLi;

      zRi -= 1;
    } else {
      zShift = i - zLi;

      if (Z[zShift] <= zRi - i) {
        Z[i] = Z[zShift];
      } else {
        zLi = i;

        while (zRi < zS.length && zS[zRi - zLi] === zS[zRi]) zRi += 1;

        Z[i] = zRi - zLi;

        zRi -= 1;
      }
    }
  }

  return Z;
}

console.log(zAlgorithm("aabcaabxaaaz", "aabx"));

// Zs = aabx$aabcaabxaaaz
// Z  = 01000310041002210
