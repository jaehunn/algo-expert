import { Solution1 } from "../Solution1";
import { Solution2 } from "../Solution2";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([-1, -5, -10, -1100, -1101, -1102, -9001]);

    expect(result).toBe(true);
  });
});

describe("Solution 2 Test", () => {
  it("case 2", () => {
    const result = Solution2([-1, -5, -10, -1100, -1101, -1102, -9001]);

    expect(result).toBe(true);
  });
});
