import { Solution1 } from "../Solution1";
import { Solution2 } from "../Solution2";
import { Solution3 } from "../Solution3";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([2, 1, 5, 2, 3, 3, 4]);

    expect(result).toBe(2);
  });
  it("case 2", () => {
    const result = Solution2([2, 1, 5, 2, 3, 3, 4]);

    expect(result).toBe(2);
  });

  it("case 3", () => {
    const result = Solution3([2, 1, 5, 2, 3, 3, 4]);

    expect(result).toBe(2);
  });
});
