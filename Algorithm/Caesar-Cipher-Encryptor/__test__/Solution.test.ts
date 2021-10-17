import { Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const result = Solution1("xyz", 2);

    expect(result).toEqual("zab");
  });
});

describe("Solution 2 Test", () => {
  it("case 1", () => {
    const result = Solution1("zxy", 2);

    expect(result).toEqual("bza");
  });
});
