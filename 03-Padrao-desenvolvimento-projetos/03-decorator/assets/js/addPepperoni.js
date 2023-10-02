import {Adicional} from "./adicional.js"

export class Pepperoni extends Adicional {
    constructor(sanduiche) {
      super(sanduiche)
      this.description += " e pepperoni"
    }
  
    cost() {
      return this.sanduiche.cost() + 0.99
    }
  }
  