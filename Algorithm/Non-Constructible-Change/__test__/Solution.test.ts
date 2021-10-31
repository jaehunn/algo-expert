import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([5, 7, 1, 1, 2, 3, 22]);

    expect(result).toBe(20);
  });
});