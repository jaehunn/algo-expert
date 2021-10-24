import { Solution1 } from "../Solution1";
import { Solution2 } from "../Solution2";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([1, 2, 3, 5, 6, 8, 9]);

    expect(result).toEqual([1, 4, 9, 25, 36, 64, 81]);
  });

  it("case 2", () => {
    const result = Solution2([-3, 1, 2, 3, 5, 6, 8, 9]);

    expect(result).toEqual([1, 4, 9, 9, 25, 36, 64, 81]);
  });
});

describe("Solution 2 Test", () => {
  it("case 1", () => {
    const result = Solution2([1, 2, 3, 5, 6, 8, 9]);

    expect(result).toEqual([1, 4, 9, 25, 36, 64, 81]);
  });

  it("case 2", () => {
    const result = Solution2([-5, -3, 1, 2, 3, 5, 6, 8, 9]);

    expect(result).toEqual([1, 4, 9, 9, 25, 25, 36, 64, 81]);
  });
});
