import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], true);

    expect(result).toBe(32);
  });
});
