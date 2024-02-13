const capitalize = require("./capitalize");

test("Successfully capitalises the first letter of a string", () => {
  expect(capitalize("weather")).toBe("Weather");
});
