// Write your tests here!

const expect = require("chai").expect;
const subsitutionModule = require("../src/substitution");

describe("subsitutionModule", () => {
  it("should encode a message by using the given substitution alphabet", () => {
    const expected = "jrufscpw";
    expect(subsitutionModule("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.eql(
      expected
    );
  });
  it("should work with any kind of key with unique characters", () => {
    const expected = "y&ii$r&";
    expect(subsitutionModule("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.eql(
      expected
    );
  });
});
