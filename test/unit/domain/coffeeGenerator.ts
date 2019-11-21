import { expect } from "chai";
import "mocha";
import { CoffeeGenerator } from "../../../src/domain/coffeeGenerator";
import { FunctionGenerators } from "../../../src/generators/functionGenerators";

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

    it("should get a random coffee with additional identifier", () => {
      const generator = new CoffeeGenerator({
        identifiers: {
          code: FunctionGenerators.getRandomIntStringFunction(4000, 5000),
        },
      });
      for (let i = 0; i < 1000; ++i) {
        const coffee = generator.randomCoffee();
        expect(coffee).to.be.an("object");

        expect(coffee).to.have.property("code");
        expect(coffee.code).to.be.a("string");
        expect(coffee.code).to.have.lengthOf.at.least(1);

        expect(coffee).to.have.property("coffee");
        expect(coffee.coffee).to.be.a("string");
        expect(coffee.coffee).to.have.lengthOf.at.least(1);
      }
    });
  });
});
