import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);

    expect(result).toBe(true);
  });
});
