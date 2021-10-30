import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([["HTML", "Python"], ["C#", "Python"], ["HMTL", "C#"]], [0, 0, 1]);

    expect(result).toBe("Python");
  });
});
