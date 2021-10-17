import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1("AAAAAAAAAAAAABBCCCCDD");

    expect(result).toEqual("9A4A2B4C2D");
  });
});
