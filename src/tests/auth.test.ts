import { describe, expect, test } from "vitest";
import { getAPIKey } from "src/api/auth";

type thingy = {
  header: string;
};

describe("test_getAPIKey", () => {
  test("this works", () => {
    const pp = { header: "oi" };
    const outcome = getAPIKey(pp);
    expect(outcome).toBeNull;
  });
});
