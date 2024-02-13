const reverse = require("./reverse");

test("Successfully reverses all characters in a given string", () => {
  expect(reverse("weather")).toBe("rehtaew");
});
