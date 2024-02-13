const calculator = require("./calcuator");

describe("calculator function", () => {
  test("Correclty add two numbers together", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("Correclty subtract one number from another", () => {
    expect(calculator.subtract(6, 3)).toBe(3);
  });
  test("Correclty multiply two numbers together", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
  test("Correclty divide one number by another", () => {
    expect(calculator.divide(9, 3)).toBe(3);
  });
});
