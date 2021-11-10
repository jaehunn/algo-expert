// T: O()
// S: O()

export function Solution1(
  redShirtHeights: number[],
  blueShirtHeights: number[]
) {
  // descending
  redShirtHeights.sort((a, b) => b - a);
  blueShirtHeights.sort((a, b) => b - a);

  const shirtColorInFirstRow =
    redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";

  for (let i = 0; i < redShirtHeights.length; i += 1) {
    const redShirtHeight = redShirtHeights[i];
    const blueShirtHeight = blueShirtHeights[i];

    // guard
    if (shirtColorInFirstRow === "RED") {
      if (redShirtHeight >= blueShirtHeight) return false;
    } else {
      if (blueShirtHeight >= redShirtHeight) return false;
    }
  }

  return true;
}
