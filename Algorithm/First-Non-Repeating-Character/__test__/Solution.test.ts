import { Solution1 } from "../Solution1";
import { Solution2 } from "../Solution2";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1("abcdcaf");

    expect(result).toBe(1);
  });

  it("case 2", () => {
    const result = Solution1("faadabcbbebdf");

    expect(result).toBe(6);
  });
});

describe("Solution 2 Test", () => {
  it("case 1", () => {
    const result = Solution2("abcdcaf");

    expect(result).toBe(1);
  });
});
