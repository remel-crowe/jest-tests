function caesar(string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let final = string.split("").map((char) => {
    let isLowerCase = char === char.toLowerCase();
    let newIndex = (alphabet.indexOf(char.toLowerCase()) + shift) % 26;
    if (isLowerCase) {
      return alphabet[newIndex];
    } else {
      return alphabet[newIndex + 26];
    }
  });

  return final.join("");
}

module.exports = caesar;
