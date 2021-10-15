import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]);

    expect(result).toEqual([18, 141, 541]);
  });

  it("case 2", () => {
    const result = Solution1([141, 10, 10, 0]);

    expect(result).toEqual([10, 10, 141]);
  });
});
