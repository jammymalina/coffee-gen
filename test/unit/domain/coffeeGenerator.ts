import { expect } from "chai";
import "mocha";
import { CoffeeGenerator } from "../../../src/domain/coffeeGenerator";

describe("CoffeeGenerator", () => {
  describe("Default configuration", () => {
    it("should get a random coffee", () => {
      const generator = new CoffeeGenerator();
      for (let i = 0; i < 1000; ++i) {
        const coffee = generator.randomCoffee();
        expect(coffee).to.be.a("string");
        expect(coffee).to.have.lengthOf.at.least(1);
      }
    });
  });
});
