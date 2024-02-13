const analyze = require("./analyzeArray");

describe("analyze function", () => {
  test("returns correct length", () => {
    const numbers = [1, 6, 7, 8, 1];
    const analysis = analyze(numbers);
    expect(analysis.length).toBe(numbers.length);
  });

  test("calculates correct average", () => {
    const numbers = [1, 6, 7, 8, 1];
    const analysis = analyze(numbers);
    expect(analysis.average()).toBe(4); // Average of [1, 6, 7, 8, 1] is 4
  });

  test("finds correct minimum value", () => {
    const numbers = [1, 6, 7, 8, 1];
    const analysis = analyze(numbers);
    expect(analysis.min()).toBe(1); // Minimum value in [1, 6, 7, 8, 1] is 1
  });

  test("finds correct maximum value", () => {
    const numbers = [1, 6, 7, 8, 1];
    const analysis = analyze(numbers);
    expect(analysis.max()).toBe(8); // Maximum value in [1, 6, 7, 8, 1] is 8
  });
});
