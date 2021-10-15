import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([8, 5, 2, 9, 5, 6, 3]);

    expect(result).toEqual([2, 3, 5, 5, 6, 8, 9]);
  });
});
