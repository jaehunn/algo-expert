import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]);

    expect(result).toBe(6);
  });
});
