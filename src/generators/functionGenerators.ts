import { GenerateValueFunction } from "../domain/generateValueFunction";
import * as uuid from "uuid";

export class FunctionGenerators {
  public static getRandomIntFunction(min: number = 1, max: number = 10): GenerateValueFunction {
    const low = Math.floor(min);
    const high = Math.floor(max);
    return () => low + Math.floor(Math.random() * (high - low));
  }

  public static getRandomIntStringFunction(min: number = 1, max: number = 10): GenerateValueFunction {
    const f = this.getRandomIntFunction(min, max);
    return () => f().toString();
  }

  public static getRandomUUID(): GenerateValueFunction {
    return () => uuid.v4();
  }
}
