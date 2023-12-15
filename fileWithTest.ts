import { assertEquals } from "https://deno.land/std@0.209.0/assert/mod.ts";

export const addOne = (x: number) => x + 1;

Deno.test("url test", () => {
  assertEquals(addOne(6), 7);
});
