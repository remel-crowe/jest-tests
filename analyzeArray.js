function analyze(numbers) {
  const length = numbers.length;
  const average = () => {
    let total = numbers.reduce((acc, current) => {
      return acc + current;
    }, 0);

    return Math.floor(total / length);
  };
  const min = () => {
    let small = numbers[0];
    numbers.forEach((number) => {
      if (number < small) {
        small = number;
      }
    });
    return small;
  };
  const max = () => {
    let large = numbers[0];
    numbers.forEach((number) => {
      if (number > large) {
        large = number;
      }
    });
    return large;
  };

  return { length, average, min, max };
}

module.exports = analyze;
