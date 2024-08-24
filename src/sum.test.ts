import { describe, expect, test } from "vitest";
import { sum } from "./sum";

describe("test sum", () => {
  test.skip("add 1 + 3 to equal 4", () => {
    expect(sum(1, 3)).toBe(4);
  });

  test("'H' + 'A' to equal 'HA'", () => {
    expect(sum(1, 1)).not.toBeTypeOf("string");
  });
});
