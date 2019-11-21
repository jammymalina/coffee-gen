const COFFEE_LIST = [
  "Affogato",
  "Café Americano",
  "Café Au Lait",
  "Café Cortado",
  "Café Latte",
  "Café Mocha",
  "Café Romano",
  "Cappuccino",
  "Cold Brew Coffee",
  "Drip Coffee",
  "Espresso",
  "Espresso con Panna",
  "Flat White",
  "French Press Coffee",
  "Frappe",
  "Macchiato",
];

export class CoffeeRepository {
  static listCoffeeDrinks(): any[] {
    return [...COFFEE_LIST];
  }
}
