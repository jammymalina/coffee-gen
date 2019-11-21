import { CoffeeGenConfig } from "../domain/coffeeGenConfig";
import { CoffeeValueGenerator } from "../domain/coffeeValueGenerator";
import { CoffeeRepository } from "../domain/coffeeRepository";

export class BasicCoffeeValueGenerator implements CoffeeValueGenerator {
  private readonly config: CoffeeGenConfig;

  constructor(config?: CoffeeGenConfig) {
    this.config = config || {};
  }

  public generateValues(): any {
    if (!this.config.identifiers) {
      return CoffeeRepository.listCoffeeDrinks();
    }
    // TODO: You know what must be done
    return CoffeeRepository.listCoffeeDrinks();
  }
}
