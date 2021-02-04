// Write your tests here!

const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

// encoding messages tests
describe("polybiusModule", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const expected = "4432423352125413";
    expect(polybiusModule("thinkful")).to.equal(expected);
  });
  it("should translate both 'i' and 'j' to 42", () => {
    const expected = "4432423352125413";
    expect(polybiusModule("thinkful")).to.equal(expected);
  });
  it("should leave spaces as is", () => {
    const expected = "3251131343 2543241341";
    expect(polybiusModule("Hello world")).to.eql(expected);
  });
});
