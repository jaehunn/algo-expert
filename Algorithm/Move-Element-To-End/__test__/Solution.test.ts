import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1([2, 1, 2, 2, 2, 3, 4, 2], 2);

    expect(result).toStrictEqual([4, 1, 3, 2, 2, 2, 2, 2]);
  });
});
