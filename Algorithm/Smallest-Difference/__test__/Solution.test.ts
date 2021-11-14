import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]);

    expect(result).toStrictEqual([28, 26]);
  });
});
