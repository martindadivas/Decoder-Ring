// Write your tests here!

const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesarModule", () => {
  it("should return false if shift is not present, equal to 0, less than -25, or greater than 25", () => {
    const expected = false;
    expect(caesarModule("thinkful")).to.equal(expected);
    expect(caesarModule("thinkful", 0)).to.equal(expected);
    expect(caesarModule("thinkful", -26)).to.equal(expected);
    expect(caesarModule("thinkful", 26)).to.equal(expected);
  });
  it("return should maintain spaces and other non-alphabetic symbols", () => {
    expect(caesarModule("This is a secret message!", 8)).to.eql(
      "bpqa qa i amlvmb qmaaiom!"
    );
    expect(caesarModule("BPQA qa I amkamb umaaiom!", 8, false)).to.eql(
      "this is a sedset qessage!"
    );
  });
  it("return should wrap alphabet", () => {
    const expected = "efg";
    expect(caesarModule("xyz", 3)).to.eql(expected);
  });
});
