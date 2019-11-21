export type GenerateValueFunction = () => any;

export interface CoffeeValueGenerator {
  generateValues(): any[];
}
