import { CoffeeGenConfig } from "../domain/coffeeGenConfig";
import { CoffeeValueGenerator } from "../domain/coffeeValueGenerator";
import { CoffeeRepository } from "../domain/coffeeRepository";

export class BasicCoffeeValueGenerator implements CoffeeValueGenerator {
  private readonly config: CoffeeGenConfig;

  constructor(config?: CoffeeGenConfig) {
    this.config = config || {};
  }

  public generateValues(): any {
    const additionalIdentifiers = Object.entries(this.config.identifiers || {});
    if (additionalIdentifiers.length === 0) {
      return CoffeeRepository.listCoffeeDrinks();
    }

    const coffeeList = CoffeeRepository.listCoffeeDrinks();
    return coffeeList.map(coffee =>
      additionalIdentifiers.reduce(
        (coffeeItem, [id, genFunction]) => ({
          [id]: genFunction(),
          ...coffeeItem,
        }),
        { coffee }
      )
    );
  }
}
