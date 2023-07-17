import sum from "../sum";

test("adds 7 + 5 to equal 12", () => {
  expect(sum(7, 5)).toBe(12);
});

test("adds 10 + 5 to equal 15", () => {
  expect(sum(10, 5)).toBe(15);
});
