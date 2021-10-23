import { flatten } from "flat";
import { LinkedList, Solution1 } from "../Solution1";

beforeEach(() => {
  //
});

describe("Solution 1 Test", () => {
  it("case 1", () => {
    const linkedList = new LinkedList(1);
    linkedList.add(1);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(4);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);
    linkedList.add(6);

    const result = Solution1(linkedList);
    const flattenResult = flatten(result);

    expect(flattenResult).toEqual({
      value: 1,
      "next.value": 3,
      "next.next.value": 4,
      "next.next.next.value": 5,
      "next.next.next.next.value": 6,
      "next.next.next.next.next": null,
    });
  });
});
