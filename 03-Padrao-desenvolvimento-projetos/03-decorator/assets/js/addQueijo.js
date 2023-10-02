import { Adicional } from "./adicional.js"

export class QueijoMussarelaRalado extends Adicional {
    constructor(sanduiche) {
      super(sanduiche)
      this.description += " com queijo mussarela ralado"
    }
  
    cost() {
      return this.sanduiche.cost() + 2.00
    }
  }
  