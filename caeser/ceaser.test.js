const caesar = require("./ceaser");

test("Properly apply a caesar cipher to a given string, case sensetive", () => {
  expect(caesar("AaAaA", 1)).toBe("BbBbB");
});
