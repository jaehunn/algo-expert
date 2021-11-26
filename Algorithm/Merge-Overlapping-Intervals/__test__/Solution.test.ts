import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([
      [1, 2],
      [3, 5],
      [4, 7],
      [6, 8],
      [9, 10],
    ]);

    expect(result).toStrictEqual([
      [1, 2],
      [3, 8],
      [9, 10],
    ]);
  });
});
