import { CoffeeGenConfig } from "./coffeeGenConfig";
import { BasicCoffeeValueGenerator } from "../service/basicCoffeeValueGenerator";

export class CoffeeGenerator {
  private readonly coffeeList: any[];

  constructor(config?: CoffeeGenConfig) {
    const valueGenerator = new BasicCoffeeValueGenerator(config);
    this.coffeeList = valueGenerator.generateValues();
  }

  randomCoffee(): any {
    return this.coffeeList[Math.floor(Math.random() * this.coffeeList.length)];
  }
}
