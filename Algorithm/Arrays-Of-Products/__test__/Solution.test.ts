import { Solution1 } from "../Solution1";
import { Solution2 } from "../Solution2";
import { Solution3 } from "../Solution3";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([5, 1, 4, 2]);

    expect(result).toStrictEqual([8, 40, 10, 20]);
  });

  it("case 2", () => {
    const result = Solution2([5, 1, 4, 2]);

    expect(result).toStrictEqual([8, 40, 10, 20]);
  });

  it("case 3", () => {
    const result = Solution3([5, 1, 4, 2]);

    expect(result).toStrictEqual([8, 40, 10, 20]);
  });
});
