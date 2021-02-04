// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    }
    if (!encode) shift = -shift;
    if (shift < 0) shift += 26;
    let result = "";
    const alphabet = "abdcefghijklmnopqrstqrstuvwxyz";
    input = input.toLowerCase();
    for (let i = 0; i < input.length; i++) {
      let char = input[i];
      let position = alphabet.indexOf(char);
      if (position === -1) {
        result += input[i];
      } else {
        let newPosition = (position + shift) % 26;
        result += alphabet[newPosition];
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
