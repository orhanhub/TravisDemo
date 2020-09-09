const { adder } = require("../index");
const { expect } = require("chai");

describe("adder Test", function () {
  it("1+1 should return 2", function () {
    expect(adder(1, 1)).equal(2);
  });

  it("2+1 should return 3", function () {
    expect(adder(2, 1)).equal(3);
  });
});
