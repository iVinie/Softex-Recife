import { Sanduiche } from "./sanduiche.js"


export class Carne extends Sanduiche {
  constructor() {
    super();
    this.description += " carne";
  }

  cost() {
    return 5.5;
  }
}
