import { GenerateValueFunction } from "./generateValueFunction";

export interface CoffeeGenConfig {
  identifiers?: {
    [identifierName: string]: GenerateValueFunction;
  };
}
